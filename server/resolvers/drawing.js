import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated, isDrawingOwner } from './authorization';

export default {
    Query: {
        // finds all of the drawing
        drawings: async (parent, args, { models }) => {
            return await models.Drawing.findAll();
        },
        // finds specific drawings by Id
        drawing: async (parent, { id }, { models }) => {
            return await models.Drawing.findByPk(id);
        }
    },
    Mutation: {
        // creates a new drawing after user gets authenticated through isAuthenticated func
        createDrawing: combineResolvers(
            isAuthenticated,
            async (parent, { project_name }, { person, models }) => {
                return await models.Drawing.create({
                    project_name,
                    user_id: person.id
                });
            }
        ),
        //checks to see if the user is authenticated
        //checks to see if the user is the owner of the drawing
        // deletes a drawing by finding the drawing's id
        deleteDrawing: combineResolvers(
            isAuthenticated,
            isDrawingOwner,
            async (parent, { id }, { models }) => {
                return await models.Drawing.destroy({ where: { id } });
            }
        )
    },
    //finds all drawings for a specific user
    Drawing: {
        user_id: async (drawing, args, { models }) => {
            return await models.User.findByPk(drawing.user_id);
        }
    }
    // //finds all drawings for a specific organization
    // Drawing: {
    //     organization_id: async (drawing, args, { models }) => {
    //         return await models.Organization.findByPk(
    //             drawing.organization_id
    //         );
    //     }
    // }
};
