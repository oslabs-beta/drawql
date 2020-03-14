//import database information
const db = require('./db');
//must mirror type definitions exactly
//schema declares the type, resolvers returns actual value
const Query = {
    greeting: (parent, args, ctx, info) => 'Hello World!'
};

module.exports = { Query };
