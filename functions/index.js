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

exports.createStudent = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
      return admin.firestore().collection('students').add(request.body).then(() => {
          response.json({ data: "New student added successfully"});
      });
  });
});

exports.getFirstName = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const email = request.body.email;
    if (!email) {
      response.status(400).json({ error: "Email is required" });
      return;
    }
    return admin.firestore().collection('students').where('email', '==', email).get().then((snapshot) => {
      if (snapshot.empty) {
        response.status(404).json({ error: "User not found" });
        return;
      }
      const firstName = snapshot.docs[0].data().fname;
      response.json({ data: firstName });
    });
  });
});


// enhanced addModule that gets data on students and lectuers
// Add a module to Firestore
exports.addModule2 = functions.https.onCall(async (data, context) => {

    // TODO: export data from lecturer page to here
  const { location, name, students, taughtby, times } = data;


  const db = admin.firestore();

  try {
    // Retrieve all students who are studying this module
    const studentsSnapshot = await db.collection("students").where("studies", "array-contains", name).get();
    const studentRefs = studentsSnapshot.docs.map((doc) => db.collection("students").doc(doc.id));

    // Add the module data to Firestore
    const moduleData = { location, name, students: studentRefs, taughtby: db.collection("lecturers").doc(taughtby), times };
    const moduleRef = await db.collection("modules").add(moduleData);
    
    return { success: true, id: moduleRef.id };
  } catch (error) {
    console.error("Error adding module:", error);
    return { success: false };
  }
});
