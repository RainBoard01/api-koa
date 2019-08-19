const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { errorHandler, execute } = require('graphql-api-koa');
const mongoose = require('mongoose');
const uri = "mongodb+srv://rainboard:.Amdapua45300@graphql-rn775.gcp.mongodb.net/test?retryWrites=true&w=majority";
const cors = require('@koa/cors');
const schema = require('./schema');

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log("DB connected"));

const app = new Koa()
    .use(errorHandler())
    .use(bodyParser())
    .use(execute({ schema }));

app.use(cors());

app.listen(4000, () => console.log('Listening on Port 4000'));