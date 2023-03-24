const functions = require('firebase-functions'); // import firebase-functions module
const cors = require("cors")({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore(); // initialise a firestore database object

// FUNCTION TO CREATE OR UPDATE A STUDENT
exports.createStudent = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    // Extract the module data fields from the request body
    const email = req.body.data.email;
    const fname = req.body.data.fname;
    const encodedEmail = encodeURIComponent(email);

    try {
      const studentRef = db.collection('students').doc(encodedEmail); // reference to the student
      const studentDoc = await studentRef.get();

      await studentRef.set({  // set the data for the student, based on the student ref
        fname: fname
      }, { merge: true }); // if the student already exists, update the existing student
      res.status(200).send({"status": "success", "data": "Student added successfully"});

    } catch (error) { // error handling
      console.error('Error adding or updating student', error);
      res.status(500).send({"status": "fail", "data": "Student was not added"});
    }
  });
});

// FUNCTION TO CREATE OR UPDATE A LECTURER
exports.createLecturer = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    // Extract the module data fields from the request body
    const email = req.body.data.email;
    const name = req.body.data.name;
    const encodedEmail = encodeURIComponent(email);
    const auth = req.body.data.auth;
    const authString = auth.toString();
    console.log("Auth string: " + authString);

    if (authString == "admin123") {
      console.log("Admin authorised");
      try {
        const lectureRef = db.collection('lecturers').doc(encodedEmail); // reference to the student
        const lectureDoc = await lectureRef.get();
  
        await lectureRef.set({  // set the data for the student, based on the lecturer ref
          name: name
        }, { merge: true }); // if the lecturer already exists, update the existing lecturer
        res.status(200).send({"status": "success", "data": "Lecturer added successfully"});
  
      } catch (error) { // error handling
        console.error('Error adding or updating lecturer', error);
        res.status(500).send({"status": "fail", "data": "Lecturer was not added"});
      }
    } else {
      res.status(200).send({"status": "fail", "data": "Admin not authorised"});
    }
  });
});


// this function is used to retrieve the first name of the student based on their email 
exports.getFirstName = functions.https.onRequest(async (request, response) => {
  cors(request, response, async () => {
    const email = request.body.data.email;
    const encodedEmail = encodeURIComponent(email);

    try {
      const studentRef = db.collection('students').doc(encodedEmail);

      await studentRef.get().then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const fname = data.fname;
          response.status(200).send({"status": "success", "data": fname});
        } else {
          response.status(404).send({"status": "fail", "data": "Student not found"});
        }
      });
    } catch (error) {
      console.error('Error retrieving student first name', error);
      response.status(500).send({"status": "fail", "data": "Student first name was not retrieved"});
    }
  });
});


// Update Module Data function (Working!!)
exports.moduleManagement = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    // Extract the module data fields from the request body
    console.log(req.body.data);
    const moduleID = req.body.data.moduleID;
    const name = req.body.data.name;
    const location = req.body.data.location;
    const times = req.body.data.times;

    mouduleIDString = moduleID.toString();

    try {
      // Get a reference to the module document in Firestore
      const moduleRef = db.collection('modules').doc(moduleID);
      console.log("moduleRef: " + moduleRef);
      const moduleDoc = await moduleRef.get();

      // If the module document already exists, update it with the new location and times fields,
      // If it does not exist, create it with the new location and times fields
      await moduleRef.set({ 
        name: name,
        location: location,
        times: times
      }, { merge: true });

      // Return a success message
      res.status(200).send({ success: true, data: 'Module data updated successfully' });
    } catch (error) {
      // If an error occurs, log it and return an error message
      console.error('Error updating module data:', error);
      res.status(500).send({ success: false, data: 'Module data was not updated' });
    }
  });
});

// function to add a student to a module
exports.addStudentToModule = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
  const email = req.body.data.email; 
  const codes = req.body.data.codes;

  const encodedEmail = encodeURIComponent(email);

  try {
    // Check if the module exists
    const moduleDoc = await db.collection('modules').doc(codes).get();
    if (!moduleDoc.exists) {
      return res.status(404).send({ "success": "false", "data": "Module not found" });
    }

    // Check if the student is already in the module
    const studentDoc = await db.collection('students').doc(encodedEmail).get();
    if (!studentDoc.exists) {
      return res.status(404).send({ "success": "false", "data": "Student not found" });
    }
    const studentData = studentDoc.data();
    if (studentData.modules && studentData.modules.includes(codes)) {
      return res.status(400).send({ "success": "false", "data": "Student already in module" });
    }

    // Add the module to the student
    const studentRef = db.collection('students').doc(encodedEmail);
    await studentRef.update({
      modules: admin.firestore.FieldValue.arrayUnion(codes)
    });

    return res.status(200).send({ "success": "true", "data": "Student was added to module" });
  } catch (error) {
    console.error('Error adding student to module', error);
    return res.status(500).send({ "success": "false", "data": "Some error occurred"});
  }
  });
});


/**
 * getStudentModules
 * Retrieves the studies of a student as an array of JSON objects from Firestore.
 *
 * @param {string} email The email of the student whose studies to retrieve.
 * @return {Promise<Array>} A promise that resolves to an array of JSON objects representing the student's studies.
 * @throws {Error} If the student document cannot be found in Firestore.
 */
exports.getStudentModules = async (studentId) => {
  try {
    // Get a reference to the student document with the given email in Firestore.
    const studentRef = db.collection('students').where('email', '==', email);
    // Get the student document data from Firestore.
    const studentDoc = await studentRef.get();

    // If the student document does not exist, throw an error.
    if (studentDoc.empty) {
      throw new Error('Student not found');
  }

    // Extract the 'studies' array from the student document data.
    const studentData = studentDoc.data();
    const studies = studentData.studies || [];

    // Return the 'studies' array.
    return studies;
  } catch (error) {
    // Log and re-throw any errors that occur during execution.
    console.error('Error getting student studies:', error);
    throw error;
  }
};