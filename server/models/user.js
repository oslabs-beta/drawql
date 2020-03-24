import bcrypt from 'bcrypt';

//creates instance of sequlize for reference user in database
//define: mapping between model and table in database
//set options: DB will throw error if query does not match type, boolean, etc
const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [7, 42]
            }
        }
        // organization_name: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // },
        // drawing_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    });

    //One to Many relationship: one user can have many drawings
    User.associate = models => {
        User.hasMany(models.Drawing, {
            as: 'author',
            foreignKey: 'user_id'
        });
    };
    //retrieves user by username OR email entry
    User.findByLogin = async login => {
        let user = await User.findOne({
            where: { username: login }
        });

        if (!user) {
            user = await User.findOne({
                where: { email: login }
            });
        }
        return user;
    };
    //adds bcrypt hash to users password before user is created in database
    User.beforeCreate(async user => {
        user.password = await user.generatePasswordHash();
    });
    // this prototype function allows the generatePasswordHash functionality to access
    //the users entered password and combine it to the result of the password being passed
    //into the hash function along with the 10 salt rounds.
    User.prototype.generatePasswordHash = async function() {
        const saltRounds = 10;
        return await bcrypt.hash(this.password, saltRounds);
    };
    //user password compared to incoming password from GraphQL mutation
    User.prototype.validatePassword = async function(password) {
        return await bcrypt.compare(password, this.password);
    };
    return User;
};

export default user;
