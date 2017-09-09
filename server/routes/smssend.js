'use strict';

const SmsService = require('./node_modules/node-smsukraine/lib/smsukraine');
const http       = require('http');

/* GET api listing. */
router.post('/', (req, res) => {
	const sms = new SmsService({
		login: "+380938285592", 
		pass: "VsegdaMolodoi01", 
		name: "Vesch"
	});
	const phone_number = req.body.number;
	const promo_code   = req.body.code;

	const data = {{
		"to": `${phone_number}`, 
		"text": `Ваш акционный код - ${promo_code}`
	}};

	const response = res => {
		console.log(res);
		return res;
	};

	sms.send(data, (err, sms_data) => {
		if(err) { 
			console.log(JSON.stringify(err));
			res.send(response(false));
		} else {
			console.log(JSON.stringify(sms_data));
			res.send(response(true));
		}
	});


});

module.exports = router;

// let data = {"to": '+380938285592', "text": "Ваш акционный код - 42342"}
// sms.send(data, function(err, sms_data){
//     if(err) return console.log(JSON.stringify(err));
//     console.log(JSON.stringify(sms_data));
// });

