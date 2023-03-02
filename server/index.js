const express = require('express');
const app = express();
const PORT = 5000;
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas')
const cors = require('cors')


app.use(cors())
//Create GraphQL Server
//Graphql, due to its nature of selectively taking parameters in a query for data lookup,
//only requires a single endpoint
app.use('/graphql', graphqlHTTP({
    schema, //presumably the shape that the queries take
    graphiql: true //allows for GUI with graphql
}))


app.listen(PORT, () => {
    console.log("Server Running on port", PORT);
})