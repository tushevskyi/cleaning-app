'use strict';

const admin                  = require('firebase-admin');
const serviceFirebaseAccount = require('./vesch-cleaning-app-firebase-adminsdk.json');

//initialize firebase database
admin.initializeApp({
  credential: admin.credential.cert(serviceFirebaseAccount),
  databaseURL: "https://vesch-cleaning-app.firebaseio.com"
});

const db = admin.database();

module.exports.db = db;
// const ref = db.ref("clients");
// const newCLient = ref.push({
//   phone_number: "+380938285592",
//   promo_code: 23423423
// });
// console.log(newCLient.key);


// const graceHop = ref.child("gracehop");
// graceHop.update({
// 	nick_name: 'supper_power'
// })