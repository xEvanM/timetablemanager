const functions = require('firebase-functions');
const cors = require("cors")({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();

exports.addModule = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        return admin.firestore().collection('modules').add({
            moduleID: request.body.moduleID,
            taughtBy: request.body.taughtBy,
            times: request.body.times
        }).then(() => {
            response.json({ data: "Module added successfully" });
        });
    });
});
