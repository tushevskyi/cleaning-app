'use strict';

const express    		= require('express');
const router     		= express.Router();
const SmsService 		= require('node-smsukraine');
const http       	    = require('http');
const server 			= require('../../server');
const rndmModule 	    = require('../services/promoCode');
const phoneNumberModule = require('../services/phoneNumber');

const sms = new SmsService({
	login: '+380938285592', 
	pass:  'VsegdaMolodoi01', 
	name:  'Vesch'
});

const phoneNumberRef = server.db.ref('phone_numbers');

const sendSMS = async (req_phone_number) => {
	const phoneNumber = await phoneNumberModule.checkProneNumber(req_phone_number);

	if (phoneNumber !== "") {
		const promoCode = await rndmModule.checkCode();
		console.log('-----------');
		console.log('code to send ' + promoCode);
		console.log(`ready to send ${promoCode} on: ` + phoneNumber);
		console.log('-----------');
	}

	// const data = {
	// 	'to': `${req_phone_number}`, 
	// 	'text': `Ваш акционный код - ${promocode}`
	// };

	// const response = res => {
	// 	const resObj = {successStatus: res, promoCode: promoCode};
	// 	console.log(resObj);
	// 	return resObj;
	// };

	// res.send(response(true));

	// sms.send(data, (err, sms_data) => {
	// 	if(err) { 
	// 		console.log(JSON.stringify(err));
	// 		res.send(response(false));
	// 	} else {
	// 		console.log(JSON.stringify(sms_data));
	// 		res.send(response(true));
	// 	}
	// });

	// const reqIp   = req.connection.remoteAddress;
	// console.log({reqIp});
};


router.post('/', (req, res) => {
	const req_phone_number  = req.body.phone_number;
	sendSMS(req_phone_number);
});

module.exports = router;