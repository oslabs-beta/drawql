import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

//acts as middleware to 1. move on to the next resolver(skip) or 2. return an error message
//checks to see if a user is authenticated or not
export const isAuthenticated = (parent, args, { person }) =>
    person ? skip : new ForbiddenError('Not authenticated as user');

// checks to see if the authenticated user is the drawing owner
export const isDrawingOwner = async (parent, { id }, { models, person }) => {
    const drawing = await models.Drawing.findByPk(id, { raw: true });
    if (drawing.user_id !== person.id) {
        throw new ForbiddenError('Not authenticated as owner.');
    }
    return skip;
};
