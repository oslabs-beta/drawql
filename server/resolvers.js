//import database information
const db = require('./db');
//must mirror type definitions exactly
//schema declares the type, resolvers returns actual value
//always a post request: client posts json, server responds with json
const Query = {
    greeting: (parent, args, ctx, info) => 'Hello World!'
};

module.exports = { Query };
