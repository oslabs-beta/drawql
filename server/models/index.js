import Sequelize from 'sequelize';

//connect to database from within application
//must specify dialect b/c sequelize supports other db types as well
const elephant = new Sequelize(
    'postgres://wsitgfzv:cWN6igq4nhfN3n14JePOGha2xO-3p2od@drona.db.elephantsql.com:5432/wsitgfzv',
    {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialect: 'postgres'
    }
);

//associate models throughout application for access to database
//example: resolvers can read and write data to adn from database
const models = {
    User: elephant.import('./user'),
    Drawing: elephant.import('./drawing')
    // Organization: elephant.import('./organization')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

//tests the connection along with error handling
elephant
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('ERROR - DATABASE NOT CONNECTED: ' + err));

export { elephant };

export default models;
