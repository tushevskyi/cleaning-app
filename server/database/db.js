'use strict';

const admin                  = require('firebase-admin');
const serviceFirebaseAccount = require('**********');

//initialize firebase database
admin.initializeApp({
  credential: admin.credential.cert(serviceFirebaseAccount),
  databaseURL: "**********"
});

const db = admin.database();

module.exports.db = db;