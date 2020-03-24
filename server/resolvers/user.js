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
}
