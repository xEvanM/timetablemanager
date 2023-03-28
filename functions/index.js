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
      res.json({data: {message : 'Student added successfully'}});
      return;

    } catch (error) { // error handling
      console.error('Error adding or updating student', error);
      res.json({data: {error : 'Student was not added'}});
      return;
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
        res.json({data: {message : 'Lecturer added successfully'}});
        return;
  
      } catch (error) { // error handling
        console.error('Error adding or updating lecturer', error);
        res.json({data: {error : 'Lecturer was not added'}});
        return;
      }
    } else {
      res.json({data: {error : 'Lecturer was not added - unauthorized'}});
      return;
    }
  });
});


// this function is used to retrieve the first name of the student based on their email 
exports.getFirstName = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const authToken = req.headers.authorization?.split('Bearer ')[1]; // get the auth token from the request headers
      if (!authToken) { // if the auth token is not present, return an error - function only runs if called by a user who is logged in to our system
        res.json({data: {error : 'Unauthorized: User must be logged in'}});
        return;
      }
      const email = req.body.data.email;
      const encodedEmail = encodeURIComponent(email);

      const studentRef = db.collection('students').doc(encodedEmail);

      await studentRef.get().then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const fname = data.fname;
          res.json({data: {message : 'Student first name retrieved successfully', fname: fname}});
          return;
        } else {
          res.json({data: {error : 'Student not found'}});
          return;
        }
      });
    } catch (error) {
      console.error('Error retrieving student first name', error);
      res.json({data: {error : 'Student first name was not retrieved'}});
      return;
    }
  });
});


// This function is used to get a lecturers fullname based on their email provided in auth, in order to add their name to the module that they teach 
exports.getLecturerName = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const email = req.body.data.email;
    console.log("Email: " + email);
    const encodedEmail = encodeURIComponent(email);

    try {
      const authToken = req.headers.authorization?.split('Bearer ')[1]; // get the auth token from the request headers
      if (!authToken) { // if the auth token is not present, return an error - function only runs if called by a user who is logged in to our system
        res.json({data: {error : 'Unauthorized: User must be logged in'}});
        return;
      }
      const lecturerRef = db.collection('lecturers').doc(encodedEmail);

      await lecturerRef.get().then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const name = data.name;
          res.json({data: {message : 'Lecturer name retrieved successfully', name: name}});
          return;
        } else {
          res.json({data: {error : 'Lecturer not found'}});
          return;
        }
      });
    } catch (error) {
      console.error('Error retrieving lecturers name', error);
      res.json({data: {error : 'Lecturer name was not retrieved'}});
      return;
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
    const lecturer = req.body.data.lecturer;
    const colour = req.body.data.colour;

    mouduleIDString = moduleID.toString();

    try {
      const authToken = req.headers.authorization?.split('Bearer ')[1]; // get the auth token from the request headers
      if (!authToken) { // if the auth token is not present, return an error - function only runs if called by a user who is logged in to our system
        res.json({data: {error : 'Unauthorized: User must be logged in'}});
        return;
      }
      // Get a reference to the module document in Firestore
      const moduleRef = db.collection('modules').doc(moduleID);
      console.log("moduleRef: " + moduleRef);
      const moduleDoc = await moduleRef.get();

      // If the module document already exists, update it with the new location and times fields,
      // If it does not exist, create it with the new location and times fields
      await moduleRef.set({ 
        name: name,
        location: location,
        lecturer: lecturer,
        colour: colour,
        times: admin.firestore.FieldValue.arrayUnion(... times) // using spread operator to add multiple elements to the array
      }, { merge: true });

      // Return a success message
      res.json({data: {message : 'Module data updated successfully'}});
      return;
    } catch (error) {
      // If an error occurs, log it and return an error message
      console.error('Error updating module data:', error);
      res.json({data: {error : 'Module data was not updated'}});
      return;
    }
  });
});

// function to add a student to a module
exports.addStudentToModule = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
  const email = req.body.data.email; 
  const code = req.body.data.code;

  const encodedEmail = encodeURIComponent(email);

  try {
    const authToken = req.headers.authorization?.split('Bearer ')[1]; // get the auth token from the request headers
    if (!authToken) { // if the auth token is not present, return an error - function only runs if called by a user who is logged in to our system
      res.json({data: {error : 'Unauthorized: User must be logged in'}});
      return;
    }
    // Check if the module exists
    const moduleDoc = await db.collection('modules').doc(code).get();
    if (!moduleDoc.exists) {
      res.json({data: {error : 'Module not found'}});
      return;
    }

    // Check if the student exists
    const studentDoc = await db.collection('students').doc(encodedEmail).get();
    if (!studentDoc.exists) {
      res.json({data: {error : 'Student not found'}});
      return;
    }

    // check if the student is already in the module
    const studentData = studentDoc.data();
    if (studentData.modules && studentData.modules.includes(code)) {
      res.json({data: {error : 'Student is already in this module'}});
      return;
    }

    // check if the student has a time conflict with any other module
    const moduleData = moduleDoc.data(); // data for the new module to be added
    const studentModules = studentData.modules; // modules the student is already in
    const newModuleTimes = moduleData.times; // get the times for the new module
    const studentModuleTimes = []; // get the times for each module the student is already in
    console.log("Entering first for loop");
    for (const module of studentModules) { // for each module the student is already in
      const moduleDoc = await db.collection('modules').doc(module).get(); // get the module document
      const moduleData = moduleDoc.data(); // get the data for the module
      const times = moduleData.times; // get the times for the module
      studentModuleTimes.push(...times); // add the times to the studentModuleTimes array
    }
    console.log("Entering second for loop");
    for (const newModuleTime of newModuleTimes) { // for each time in the new module
      for (const studentModuleTime of studentModuleTimes) { // for each time in the student's modules
        console.log("Comparing studentModuleTime: " + studentModuleTime + " with newModuleTime: " + newModuleTime + "");
        if (newModuleTime === studentModuleTime) { // if the times are the same
          res.json({data: {error : 'Student has a time conflict with another module'}});
          return;
        }
        console.log ("No time conflict!");
      }
    }


    // Add the module to the student
    const studentRef = db.collection('students').doc(encodedEmail);
    await studentRef.update({
      modules: admin.firestore.FieldValue.arrayUnion(code)
    });

    res.json({data: {message : 'Student added to module successfully'}});
    return;
  } catch (error) {
    console.error('Error adding student to module', error);
    res.json({data: {error : 'Student was not added to module'}});
    return;
  }
  });
});


exports.getModulesStudied = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const email = req.body.data.email;
    const encodedEmail = encodeURIComponent(email);

    try {
      const authToken = req.headers.authorization?.split('Bearer ')[1]; // get the auth token from the request headers
      if (!authToken) { // if the auth token is not present, return an error - function only runs if called by a user who is logged in to our system
        res.json({data: {error : 'Unauthorized: User must be logged in'}});
        return;
      }
      const studentRef = db.collection('students').doc(encodedEmail);

      await studentRef.get().then(async (doc) => {
        if (doc.exists) {
          const data = doc.data();
          const modules = data.modules;

          // Fetch module data for each module the student studies
          const moduleDataPromises = modules.map(async (moduleName) => {
            const moduleRef = db.collection('modules').doc(moduleName);
            const moduleDoc = await moduleRef.get();
            if (moduleDoc.exists) {
              return moduleDoc.data();
            } else {
              return null;
            }
          });
          const moduleData = await Promise.all(moduleDataPromises);

          // Filter out null values for modules that couldn't be found in the "modules" collection
          const modulesStudied = moduleData.filter(module => module !== null);

          res.json({data: {message : 'Student modules retrieved successfully', modules: modulesStudied}});
          return;
        } else {
          res.json({data: {error : 'Student not found'}});
          return;
        }
      });
    } catch (error) {
      console.error('Error retrieving student first name', error);
      res.json({data: {error : 'Student modules not retrieved'}});
      return;
    }
  });
});

exports.getAccessLevel = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const email = req.body.data.email;
    const encodedEmail = encodeURIComponent(email);

    try {
      const authToken = req.headers.authorization?.split('Bearer ')[1]; // get the auth token from the request headers
      if (!authToken) { // if the auth token is not present, return an error - function only runs if called by a user who is logged in to our system
        res.json({data: {error : 'Unauthorized: User must be logged in'}});
        return;
      }
      const studentRef = db.collection('students').doc(encodedEmail);
      const lecturerRef = db.collection('lecturers').doc(encodedEmail);
      
      const [studentDoc, lecturerDoc] = await Promise.all([
        studentRef.get(),
        lecturerRef.get(),
      ]);

      if (studentDoc.exists) {
        res.json({data: {message : 'Student access level retrieved successfully', accessLevel: 'student'}});
        return;
      } else if (lecturerDoc.exists) {
        res.json({data: {message : 'Lecturer access level retrieved successfully', accessLevel: 'lecturer'}});
        return;
      } else {
        res.json({data: {error : 'Access level not retrieved'}});
        return;
      }
    } catch (error) {
      console.error('Error retrieving access level', error);
      res.json({data: {error : 'Access level not retrieved'}});
      return;
    }
  });
});