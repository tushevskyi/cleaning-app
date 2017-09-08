const express     = require('express');
const router      = express.Router();
const nodemailer  = require('nodemailer');
const fs          = require('fs');
const clientCheck = require('../checkClient');

/* GET api listing. */
router.post('/', (req, res) => {
	// need add email check on client and server
	const mail      = req.body.mail;   

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
		subject: 'Sending Email using Node.js', 
		text: 'That was easy!'
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

	// const saveClientInfo = (ip,mail) => {
	// 	const buffer = fs.readFile('../clientInfo.json');
	// 	const data = JSON.stringify(buffer.toString());

	// 	if(data.clientObj.hasOwnProperty(ip)) {
	// 		setTimeOut(sendMail, 60000);
	// 	} else {
	// 		data.clientObj[ip] = mail;
	// 		sendMail;
	// 	}
	// };
	

	//req.connection.remoteAddress

});

module.exports = router;