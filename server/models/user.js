import bcrypt from 'bcrypt';

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

    User.associate = models => {
        User.hasMany(models.Drawing, {
            as: 'author',
            foreignKey: 'user_id'
        });
    };

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
    User.beforeCreate(async user => {
        user.password = await user.generatePasswordHash();
    });
    User.prototype.generatePasswordHash = async function() {
        const saltRounds = 10;
        return await bcrypt.hash(this.password, saltRounds);
    };
    User.prototype.validatePassword = async function(password) {
        return await bcrypt.compare(password, this.password);
    };
    return User;
};

export default user;
