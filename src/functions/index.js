const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin:true});
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

  exports.addModule = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
      // your code to add a document to Firestore
      const res = await db.collection('modules').doc('testing1').set(data);
      response.send(res);
    });
  });