import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated, isDrawingOwner } from './authorization';

export default {
    Query: {
        drawings: async (parent, args, { models }) => {
            return await models.Drawing.findAll();
        },
        drawing: async (parent, { id }, { models }) => {
            return await models.Drawing.findByPk(id);
        }
    },
    Mutation: {
        createDrawing: combineResolvers(
            isAuthenticated,
            async (parent, { project_name }, { person, models }) => {
                return await models.Drawing.create({
                    project_name,
                    user_id: person.id
                });
            }
      ),
      
    }
};
