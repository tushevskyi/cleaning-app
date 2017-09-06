'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('clientInfo.json');
const src = buffer.toString();
const lines = 'test';
fs.writeFileSync('clientInfo.json', lines);
