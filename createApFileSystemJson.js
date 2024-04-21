const fs = require('fs');

const json = {};

const files = fs.readdirSync('./jsonFields/');
json.jsonFields = [];
for (const file of files) {
    if (file === '..') continue;
    json.jsonFields.push(file);
}

json.method = fs.readFileSync('./method').toString();
json.jsonLogScript = fs.readFileSync('./jsonLogScript').toString();

const queries = fs.readdirSync('./queries/');
json.queries = {};
for (const queryDir of queries) {
    if (queryDir === '..') continue;
    const query = fs.readFileSync('./queries/' + queryDir + '/query.txt').toString();
    json.queries[queryDir] = {};
    json.queries[queryDir].query = query;
}

// install files
json.briefJsonFields = fs.readFileSync('./briefJsonFields.json').toString();
json.jsonSubQueries = fs.readFileSync('./jsonSubQueries.json').toString();
json.jsonQueries = fs.readFileSync('./jsonQueries.json').toString();

fs.writeFileSync('./docs/apFileSystem.json', JSON.stringify(json, null, 2));