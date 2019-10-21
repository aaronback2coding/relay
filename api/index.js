
const { MongoClient } = require('mongodb');
const assert = require('assert');
const MONGO_URL = 'mongodb://localhost:27017';

const graphqlHTTP = require('express-graphql');

const express = require('express');
const app = express();
app.use(express.static('public'));

var cors = require("cors");

const bodyParser = require('body-parser')


const mySchema = require('./schema/main');

MongoClient.connect(MONGO_URL, (err, client) => {
    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    app.use(cors());


    var db = client.db('test');




    app.use(bodyParser.json());
    app.use('/graphql', (req, res, next) => {
        const { query, variables } = req.body;
        console.log(query);
        console.log(variables);
        let send = res.send;
        res.send = function (body) {
            console.log(body)
            send.call(this, body);
        }
        next();
    })

    app.use('/graphql', graphqlHTTP({
        schema: mySchema,
        context: { db },
        graphiql: true,
    }));


    app.listen(4000, () =>
        console.log('Running Express.js on port 4000')
    );
});

