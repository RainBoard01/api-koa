const Koa = require('koa');
const mount = require('koa-mount');
const cors = require('@koa/cors');
const graphqlHTTP = require('koa-graphql');
const { graphqlUploadKoa } = require('graphql-upload')

const schema = require('./schema');
const dbInit = require('./database');
const PORT = process.env.PORT || 4000;

dbInit();
new Koa()
    .use(cors())
    .use(graphqlUploadKoa({
        maxFileSize: 10000000,
        maxFiles: 100
    }))
    .use(mount('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true
    })))
    .listen(PORT,() => console.log(`Running on port ${ PORT }`));