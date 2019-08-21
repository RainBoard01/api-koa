const Koa = require('koa');
const mount = require('koa-mount');
const cors = require('@koa/cors');
const graphqlHTTP = require('koa-graphql');

const schema = require('./schema');
const dbInit = require('./database');
const PORT = process.env.PORT || 4000;

const app = new Koa();

app.use(cors());
app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
})));

dbInit();
app.listen(PORT, () => console.log(`Running on port ${ PORT }`));