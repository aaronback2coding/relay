const fs = require('fs');
const path = require('path');
const { printSchema } = require('graphql/utilities');

const mySchema = require('./main');

fs.writeFileSync(
    path.join(__dirname, './schema.graphql'),
    printSchema(mySchema)
);