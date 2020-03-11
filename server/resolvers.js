//import database information
const db = require('./db');

const Query = {
    greeting: (parent, args, ctx, info) => 'Hello World!'
};

module.exports = { Query };
