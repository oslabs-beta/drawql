// export default {
//     Query: {
//          // finds all organizations
//         organizations: async (parent, args, { models }) => {
//             return await models.Organization.findAll();
//         },
//           // finds organization by id
//         organization: async (parent, { id }, { models }) => {
//             return await models.Organization.findByPk(id);
//         },
//
//         org: async (parent, args, { models, org }) => {
//             if (!org) {
//                 return null;
//             }

//             return await models.Organization.findByPk(org.id);
//         }
//     }
// };
