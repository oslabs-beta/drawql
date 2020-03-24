import jwt from 'jsonwebtoken';
import {
    AuthenticatedError,
    UserInputError,
    AuthenticationError
} from 'apollo-server';

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
    Mutation: {
        //takes in arguements to create a user based upon the user model
        // it also creates a secret
        signUp: async (
            parent,
            { username, email, password },
            { models, secret }
        ) => {
            const user = await models.User.create({
                username,
                email,
                password
            });
            // creates and returns a token based off of user's information
            // the last argument sets an expiration time for the token
            return { token: createToken(user, secret, '30m') };
        },
        //the user should be able to use their email or username  + password to enable a successful login 
        logIn: async (parent, { login, password }, { models, secret }) => {
            const user = await models.User.findByLogin(login);
            //if a user does not exist, the application will throw an error
            if (!user) {
                throw new UserInputError(
                    'No user found with this login credentials'
                );
            }
            //if the user exist, the password is validated and the login mutation returns a token identical to the signup muation
            const isValid = await user.validatePassword(password);
            if (!isValid) {
                throw new AuthenticationError('Invalid password.');
            }
            return { token: createToken(user, secret, '30m') };
        }
    }
};
