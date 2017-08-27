const express    = require('express'),
      router     = express.Router(),
      nodemailer = require('nodemailer');

/* GET api listing. */
router.post('/', (req, res) => {
	// need add email check on client and server
	let mail = req.body.mail;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'makeewlad@gmail.com',
			pass: 'zbxyjtujdyj'
		}
	});

	let mailOptions = {
		from: 'makeewlad@gmail.com',
		to: mail,
		subject: 'Sending Email using Node.js', 
		text: 'That was easy!'
	};

	let response = res => {
		return {'response': res};
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log('error');
			res.send(response(false));
		} else {
			console.log('Email sent: ' + info.response);
			res.send(response(true));
		}
	});
});

module.exports = router;