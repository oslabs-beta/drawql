// const organization = (sequelize, DataTypes) => {
//     const Organization = sequelize.define('organization', {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 notEmpty: {
//                     args: true,
//                     msg: 'A organization has to have a name.'
//                 }
//             }
//         }
//     });

//     Organization.associate = models => {
//         Organization.belongsToMany(models.Drawing, {
//             through: 'drawing',
//             foreignKey: 'organization_id'
//         });
//     };

//     return Organization;
// };

// export default organization;
