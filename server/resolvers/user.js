import jwt from 'jsonwebtoken';
import { AuthenticatedError, UserInputError } from 'apollo-server';

//creates a decoded token
const createToken = async (user, secret, expiresIn) => {
    const { id, email, username } = user;
    return await jwt.sign({ id, email, username }, secret, {
        expiresIn
    });
};
export default {
    Query: {
        // finds all users
        users: async (parent, args, { models }) => {
            return models.User.findAll();
    },
      //finds user by id if the person exist
        user: async (parent, args, { models, person }) => {
            if (!person) {
                return null;
            }
            return await models.User.findByPk(person.id);
        }
  },
  
};
