'use strict';
const server = require('../../server');

const promoCodeRef = server.db.ref("promo_codes");

const getRundomNumber = () => {
	const MIN = 10000;
	const MAX = 99999;
	const NUM = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;	
	return NUM;
};

const checkCode = () => {
  	const code = getRundomNumber();

	return promoCodeRef.child(code).once('value').then((snapshot) => {
	  	const exists = (snapshot.val() === 'true');

		if (!exists) {
			console.log('promocode: ' + code + ' saved in db!');
			const promoCode = promoCodeRef.child(code);
			promoCode.set('true');
			return code;
		} else {
			console.log('promocode:' + code + ' exists!');
			checkCode();
		}
	});
}

module.exports.checkCode = checkCode;
