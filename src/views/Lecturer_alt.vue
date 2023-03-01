<template>
    <head>
        <title>Lecturer Page</title>
    </head>

    <body>
        <div class="banner"></div>
        <div class="profilepic">
            <img src=https://www.pngall.com/wp-content/uploads/5/Biden.png>
        </div>
        <div class="loginimg">
            <img src=https://cdn-icons-png.flaticon.com/512/277/277991.png>
        </div>
        <div class="viewbutton">Weekly View</div>
        <input id="button" @click="reg" value="Sign Out" readonly />
        <div class="greeting">Hello, Lecturer!</div>

        <div class="module-form">
            <h2>Add a new module:</h2>
            <div class="moduleid">
                <label for="moduleID" class="form-label">Module ID</label>
                <input type="text" class="form-control" v-model="moduleData.moduleID" id="moduleID" placeholder="CT101" />
            </div>

            <div class="teacher">
                <label for="taughtBy" class="form-label">Taught By</label>
                <input type="text" class="form-control" v-model="moduleData.taughtBy" id="taughtBy"
                    placeholder="f.glavin" />
            </div>

            <div class="times">
                <label for="times" class="form-label">Times</label>
                <textarea class="form-control" v-model="moduleData.times" id="times" rows="3"></textarea>
            </div>

            <button type="button" @click="addModule" class="btn btn-primary">
                Add Module
            </button>
        </div>
    </body>
</template>

<script>


/* code snippet 1: doesn't use firebase functions

import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

export default {
    data() {
        return {
            moduleData: {
                moduleID: "",
                taughtBy: "",
                times: "",
            },
        };
    },
    methods: {
        
        addModule2() {
            const moduleRef = db.collection("modules").doc(this.moduleData.moduleID);
            
            const studentsRef = db.collection("students").where("studies", "array-contains", this.moduleData.moduleID);
            
            const taughtByRef = db.collection("lecturers").doc(this.moduleData.taughtBy);
            
            studentsRef.get().then((querySnapshot) => {
                const students = [];
                querySnapshot.forEach((doc) => {
                    students.push(db.collection("students").doc(doc.id));
                });
                
                const moduleData = {
                    location: "Room 101",
                    name: this.moduleData.moduleID,
                    students: students,
                    taughtby: taughtByRef,
                    times: this.moduleData.times.split("\n"),
                };
                
                moduleRef
                .set(moduleData)
                .then(() => {
                    console.log("Module added with ID: ", this.moduleData.moduleID);
                    this.moduleData.moduleID = "";
                    this.moduleData.taughtBy = "";
                    this.moduleData.times = "";
                })
                .catch((error) => {
                    console.error("Error adding module: ", error);
                });
            });
        },
    },
};

*/

/* code snippet 2: uses firebase functions but doesn't have an export statement yet

import firebase from "firebase/app";
import "firebase/functions";

const addModule = firebase.functions().httpsCallable("addModule");

// Add a new module to Firestore
addModule({
    location: "Room 101",
    name: "Introduction to Computer Science",
    taughtby: "f.glavin",
    times: ["Monday 9am", "Wednesday 2pm", "Friday 10am"],
})
    .then((result) => {
        console.log("Module added with ID:", result.data.id);
    })
    .catch((error) => {
        console.error("Error adding module:", error);
    });

    */

</script>
