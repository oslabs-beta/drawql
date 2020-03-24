const drawing = (sequelize, DataTypes) => {
    const Drawing = sequelize.define('drawing', {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'A drawing has to have a project name.'
                }
            }
        },
        project_code: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // organization_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    Drawing.associate = models => {
        Drawing.belongsTo(models.User);
    };
    return Drawing;
};

export default drawing;
