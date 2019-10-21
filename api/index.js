
const { MongoClient } = require('mongodb');
const assert = require('assert');
const MONGO_URL = 'mongodb://localhost:27017';

const graphqlHTTP = require('express-graphql');

const express = require('express');
const app = express();
app.use(express.static('public'));

var cors = require("cors");


const mySchema = require('./schema/main');

MongoClient.connect(MONGO_URL, (err, client) => {
    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    app.use(cors());


    var db = client.db('test');
    app.use('/graphql', graphqlHTTP({
        schema: mySchema,
        context: { db },
        graphiql: true,
    }));

    app.listen(4000, () =>
        console.log('Running Express.js on port 4000')
    );
});

