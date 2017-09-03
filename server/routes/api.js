const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');
const fs         = require('fs');

/* GET api listing. */
router.post('/', (req, res) => {
	// need add email check on client and server
	const mail      = req.body.mail;
	const clientObj = {};

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'makeewlad@gmail.com',
			pass: 'zbxyjtujdyj'
		}
	});

	const mailOptions = {
		from: 'makeewlad@gmail.com',
		to: mail,
		subject: 'Sending Email using Node.js', 
		text: 'That was easy!'
	};

	const response = res => {
		return {'response': res};
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
	
	const saveIpMail = (db,ip,mail) => {
		if(db.hasOwnProperty(ip)) {
			return false;
		} else {
			db[ip] = mail;
			return true;
		}
	}

	const checkIp = ip => {
		if(saveIp(ip)) {
			sendEmail();
		} else {
			console.log('timer start')
			setTimeout(sendEmail, 60000);
		}
	}

	checkIp(req.connection.remoteAddress);

});

module.exports = router;