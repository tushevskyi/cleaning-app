'use strict';

const express    		= require('express');
const router     		= express.Router();
const SmsService 		= require('node-smsukraine');
const http       	    = require('http');
const rndmModule 	    = require('../promoCode');
const phoneNumberModule = require('../phoneNumber');
const server 			= require('../../server');

const sms = new SmsService({
	login: '+380938285592', 
	pass: 'VsegdaMolodoi01', 
	name: 'Vesch'
});

router.post('/', (req, res) => {
	const phoneNumberRef = server.db.ref('phone_numbers');
	const phone_number = req.body.phone_number;
	const phoneNumberBd = phoneNumberRef.child(phone_number);
	phoneNumberBd.set('true');

	const sendSMS = (number) => {
		const data = {
			'to': `${phone_number}`, 
			'text': `Ваш акционный код - ${number}`
		};

		const response = res => {
			const resObj = {successStatus: res, promoCode: number};
			console.log(resObj);
			return resObj;
		};

		// res.send(response(true));

		sms.send(data, (err, sms_data) => {
			if(err) { 
				console.log(JSON.stringify(err));
				res.send(response(false));
			} else {
				console.log(JSON.stringify(sms_data));
				res.send(response(true));
			}
		});

		const reqIp   = req.connection.remoteAddress;
		console.log({reqIp});
	};

	rndmModule.checkCodeInDb(sendSMS);

});

module.exports = router;