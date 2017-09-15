'use strict';

const express    		= require('express');
const router     		= express.Router();
const SmsService 		= require('node-smsukraine');
const http       	    = require('http');

const rndmModule 	    = require('../services/promoCode');
const phoneNumberModule = require('../services/phoneNumber');
const dbModule 			= require('../database/db');
const emailSendModule	= require('./emailsend');

const clientInfoRef 	= dbModule.db.ref('clients');
// const clientsIp 		= dbModule.db.ref('clients_ip');


const sms = new SmsService({
	login: '+380938285592', 
	pass:  'VsegdaMolodoi01', 
	name:  'Vesch'
});

const response = (res, promo_code, error, error_type = 'no error') => {
	const resObj = { 
		successStatus: res, 
		promoCode: promo_code,
		phoneNumberErrorStatus: error,
		phoneNumberError: error_type
	};

	console.log(resObj);
	return resObj;
};

router.post('/', (req, res) => {

	const req_phone_number = req.body.phone_number;
	// const req_ip = req.connection.remoteAddress;
	// console.log(req_ip);

	const smsSend = async () => {
		const phone_number = await phoneNumberModule.checkPhoneNumber(req_phone_number);

		if(phone_number !== "exists in db" && phone_number !== "corrupt") {
			const promo_code = await rndmModule.checkCode();

			clientInfoRef.push({
				phoneNumber: phone_number,
				promoCode: promo_code
			});

			// const data = {
			// 	'to': `${phone_number}`, 
			// 	'text': `Ваш акционный код - ${promo_code}`
			// };

			// sms.send(data, (err, sms_data) => {
			// 	if(err) { 
			// 		console.log(JSON.stringify(err));
			// 		res.send(response(false, 0, true));
			// 	} else {
			// 		console.log(JSON.stringify(sms_data));
			// 		res.send(response(false, 0, true, phone_number));
			// 	}
			// });

			//(res, promo_code, error, error_type = 'no error')
			res.send(response(true, promo_code, false));

		} else {
			res.send(response(false, 0, true, phone_number));
		}
	};

	smsSend();
	
});

module.exports = router;