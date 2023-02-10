const functions = require('firebase-functions');
const cors = require("cors")({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();

exports.addModule = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        return admin.firestore().collection('modules').add(request.body).then(() => {
            response.json({ data: "Module added successfully" });
        });
    });
});
