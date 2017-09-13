'use strict';

const express        = require('express');
const router         = express.Router();
const nodemailer     = require('nodemailer');
const fs             = require('fs');
const dbModule 	     = require('../database/db');

/* GET api listing. */
router.post('/', (req, res) => {
	// need add email check on client and server
	const mail      = req.body.mail;   
	const promoCode = req.body.promoCode;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'vesch.promo@gmail.com',
			pass: 'VsegdaMolodoi01'
		}
	});

	const mailOptions = {
		from: 'vesch.promo@gmail.com',
		to: mail,
		subject: 'Участие в акции от Vesch', 
		text: `Ваш акционный код ${promoCode}`
	};

	const response = res => {
		console.log(res);
		return res;
	};

	const sendEmail = () => {
		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log('error ' + error);
				res.send(response(false));
				console.log(req.body);
			} else {
				console.log('Email sent: ' + info.response);
				res.send(response(true));
			}
		});
	}

	sendEmail();

});

module.exports = router;