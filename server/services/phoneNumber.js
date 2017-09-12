'use strict';
const server  = require('../../server');
const smssend = require('../routes/smssend');

const phoneNumberRef = server.db.ref("phone_numbers");

const checkProneNumber = (number) => {

	return phoneNumberRef.child(number).once('value').then((snapshot) => {
	  	const exists = (snapshot.val() === 'true');

		if (!exists) {
			console.log('number ' + number + ' saved in db!');
			const phoneNumber = phoneNumberRef.child(number);
			phoneNumber.set('true');
			return number;
		} else {
			console.log('number ' + number + ' exists in db!');
			return "";
		}
	});
}

module.exports.checkProneNumber = checkProneNumber;

