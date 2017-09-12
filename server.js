'use strict';

// Get dependencies
const express                = require('express');
const path                   = require('path');
const http                   = require('http');
const bodyParser             = require('body-parser');
const helmet                 = require('helmet');
const admin                  = require('firebase-admin');
const serviceFirebaseAccount = require('./server/vesch-cleaning-app-firebase-adminsdk.json');

const coolbear =
  "    ('-^-/')  \n" +
  "    `o__o' ]  \n" +
  "    (_Y_) _/  \n" +
  "  _..`--'-.`, \n" +
  " (__)_,--(__) \n" +
  "     7:   ; 1 \n" +
  "   _/,`-.-' : \n" +
  "  (_,)-~~(_,) \n";


console.log(coolbear);  

//initialize firebase database
admin.initializeApp({
  credential: admin.credential.cert(serviceFirebaseAccount),
  databaseURL: "https://vesch-cleaning-app.firebaseio.com"
});

const db  = admin.database();

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

// get emailsend routes
const emailsend = require('./server/routes/emailsend');
const smssend = require('./server/routes/smssend');
const app = express();

//npm helmet for data transfer security
app.use(helmet());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Set our api routes
app.use('/emailsend', emailsend);
app.use('/smssend', smssend);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on port:${port}`));