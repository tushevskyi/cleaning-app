'use strict';

const dbModule = require('../database/db');
const phoneNumberRef = dbModule.db.ref('phone_numbers');

const checkPhoneNumber = (number) => {

	const validPhoneNumber = phoneNumberValidate(number);

	if (validPhoneNumber === 'corrupt') {
		return 'corrupt';
	}

	return phoneNumberRef.child(validPhoneNumber).once('value').then((snapshot) => {
	  	const exists = (snapshot.val() === 'true');

		if (!exists) {
			console.log('number ' + validPhoneNumber + ' saved in db!');
			const phoneNumber = phoneNumberRef.child(validPhoneNumber);
			phoneNumber.set('true');
			return validPhoneNumber;
		} else {
			console.log('number ' + validPhoneNumber + ' exists in db!');
			return 'exists in db';
		}
	});
}

const phoneNumberValidate = (phone_number) => {
	const mask = '380931234567';
	const phoneNumber   = phone_number.replace(/\D/g,'');

	if(phoneNumber.length !== mask.length) {
		return 'corrupt';
	}

	return phoneNumber;
}

module.exports.checkPhoneNumber = checkPhoneNumber;
