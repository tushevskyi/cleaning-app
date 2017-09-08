'use strict';

const fs = require('fs');

module.exports = checkIp = (ip,fn) => {
	fs.readFile('clientInfo.json', 'utf8', function (err, data) {
    	let db = JSON.parse(data);
    	if(db.indexOf(ip) === -1) {
    		rs.writeFile('clientInfo.json', ip);
    		fn;
    	} else {
    		setTimeout(fn,6000);
    	}
	});	
};

// fs.writeFileSync('clientInfo.json', lines);
