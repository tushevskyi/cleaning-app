'use strict';
const admin                  = require('firebase-admin');
const serviceFirebaseAccount = require('./vesch-cleaning-app-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceFirebaseAccount),
  databaseURL: "https://vesch-cleaning-app.firebaseio.com"
});

const db  		   = admin.database();
const promoCodeRef = db.ref("promo_codes");

const getRundomNumber = () => {
	const MIN = 10000;
	const MAX = 99999;
	const NUM = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;	
	return NUM;
};

const rndmNumber = getRundomNumber();

const checkCodeInDb = (callback) => {
  const code = getRundomNumber();
  promoCodeRef.child(code).once('value', (snapshot) => {
    const exists = (snapshot.val() === 'true');

    if (!exists) {
    	// console.log('user ' + code + ' does not exist!');
		const promoCode = promoCodeRef.child(code);
		promoCode.set('true');
		callback(code);
    } else {
    	console.log('user ' + code + ' exists!');
    	checkCodeInDb(callback);
    }
  });
}

module.exports.rndmNumber    = rndmNumber;
module.exports.checkCodeInDb = checkCodeInDb;
