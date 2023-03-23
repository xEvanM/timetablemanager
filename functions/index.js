const functions = require('firebase-functions');
const cors = require("cors")({ origin: true });
const admin = require('firebase-admin');
admin.initializeApp();

// Initialize a Firestore database object
const db = admin.firestore();

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
          response.json({ data: "student added successfully"});
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
    // Get a reference to the module document in Firestore
    const moduleRef = db.collection('modules').doc(moduleID);
    const moduleDoc = await moduleRef.get();

    // If the module document already exists, update it with the new location and times fields,
    // If it does not exist, create it with the new location and times fields

      await moduleRef.set({ 
        name: name,
        location: location,
        times: times
      });

    // Return a success message
    return { success: true };
  } catch (error) {
    // If an error occurs, log it and return an error message
    console.error('Error updating module data:', error);
    return { success: false, error: error.message };
  }
});

/**
 * addStudentToModule function
 * Adds a student to a module in Firestore.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {string} req.body.studentId - The ID of the student to add.
 * @param {string} req.body.moduleName - The name of the module to add the student to.
 * @param {Object} res - The HTTP response object.
 * 
 * @return {void} - This function does not return anything directly, but it sends an HTTP response to the client.
 */

// Define the function that will be triggered by HTTP requests
exports.addStudentToModule = functions.https.onRequest((req, res) => {
  // Extract the student ID and module name from the request body
  const studentId = req.body.studentId;
  const moduleName = req.body.moduleName;

  // Create references to the module and student documents in Firestore
  const moduleRef = db.collection('modules').doc(moduleName);
  const studentRef = db.collection('students').doc(studentId);

  // Use a Promise.all() to retrieve both documents at the same time
  Promise.all([moduleRef.get(), studentRef.get()])
    .then(([moduleDoc, studentDoc]) => {
      // Check if both documents exist
      if (moduleDoc.exists && studentDoc.exists) {
        // Retrieve the data from the module and student documents
        const moduleData = moduleDoc.data();
        const studentData = studentDoc.data();

        // Check if the student is already enrolled in the module
        if (moduleData.students && moduleData.students.includes(studentId)) {
          // Send an error response if the student is already enrolled
          res.status(400).send('Student already enrolled in module');
          return;
        }

        // Add the student ID to the "students" array in the module document
        moduleRef.update({
          students: admin.firestore.FieldValue.arrayUnion(studentId)
        }).then(() => {
          // Send a success response if the update is successful
          res.status(200).send(`Student ${studentId} added to module ${moduleName}`);
        }).catch((error) => {
          // Send an error response if there is a problem updating the document
          console.error(error);
          res.status(500).send('Error adding student to module');
        });
      } else {
        // Send an error response if either document does not exist
        res.status(400).send('Invalid student or module ID');
      }
    }).catch((error) => {
      // Send an error response if there is a problem retrieving the documents from Firestore
      console.error(error);
      res.status(500).send('Error retrieving data from database');
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