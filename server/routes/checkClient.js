'use strict';

const fs = require('fs');

const buffer = fs.readFileSync('./clientInfo.json');
const src = buffer.toString();
const lines = src.split('\n').filter(line => !!line);
fs.writeFileSync('./clientInfo.json', lines.join('\n'));
