'use strict';

const fs = require('fs');

fs.readFile('clientInfo.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    let db = JSON.parse(data);
    console.log(db[0]['id']);
});

// fs.writeFileSync('clientInfo.json', lines);
