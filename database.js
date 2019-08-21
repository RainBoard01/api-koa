const mongoose = require('mongoose');
const uri = `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PASS }@graphql-rn775.gcp.mongodb.net/test?retryWrites=true&w=majority`;

const dbInit = () => {
    mongoose.connect(
        uri,
        { useNewUrlParser: true }
    );
    mongoose.connection.once('open', () => console.log('DB is conected'));
};

module.exports = dbInit;