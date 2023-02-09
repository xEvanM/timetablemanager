const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

exports.addModule = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    // your code to add a document to Firestore
    const res = await db.collection('modules').doc('testing1').set(data);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(res);
  });
});