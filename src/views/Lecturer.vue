<template>
  <head>
    <title>Lecturer View</title>
  </head>
  <body>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <svg
      class="signouticon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="#252525"
        d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9Z"
      />
    </svg>
    <div class="greeting">Hello, {{ lecturerName }}!</div>
    <input id="signout" @click="signOut" value=" Sign Out" readonly />
    <div class="addModule">
      <h1>Create/Edit Module</h1>
      <form>
        <div class="leftside">
          <div class="txt_field">
            <input type="text" v-model="moduleID" />
            <span></span>
            <label>Module Code</label>
          </div>
          <div class="txt_field">
            <input type="text" v-model="name" />
            <span></span>
            <label>Module Name</label>
          </div>
          <div class="txt_field">
            <input type="text" v-model="location" />
            <span></span>
            <label>Module Location</label>
          </div>
        </div>
        <div class="rightside">
          <div class="txt_field">
            <input type="text" v-model="times" />
            <span></span>
            <label>Module Times</label>
          </div>
          <div class="txt_field">
            <label>Module Colour</label>
          </div>
          <div class="colours">
            <ul>
              <div
                :style="this.colour == '#cf9fff' ? getColourStyle() : {}"
                class="violet"
                @click="selectColour('#cf9fff')"
              ></div>
              <div
                :style="this.colour == '#ff5733' ? getColourStyle() : {}"
                class="orange"
                @click="selectColour('#ff5733')"
              ></div>
              <div
                :style="this.colour == '#ff8d1a' ? getColourStyle() : {}"
                class="lightorange"
                @click="selectColour('#ff8d1a')"
              ></div>
              <div
                :style="this.colour == '#ad9176' ? getColourStyle() : {}"
                class="brown"
                @click="selectColour('#ad9176')"
              ></div>
              <div
                :style="this.colour == '#add45c' ? getColourStyle() : {}"
                class="lightgreen"
                @click="selectColour('#add45c')"
              ></div>
              <div
                :style="this.colour == '#57c785' ? getColourStyle() : {}"
                class="green"
                @click="selectColour('#57c785')"
              ></div>
              <div
                :style="this.colour == '#00baad' ? getColourStyle() : {}"
                class="teal"
                @click="selectColour('#00baad')"
              ></div>
              <div
                :style="this.colour == '#2a7b9b' ? getColourStyle() : {}"
                class="blue"
                @click="selectColour('#2a7b9b')"
              ></div>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <span class="divider"></span>
        <input id="button" @click="moduleManagement" value="Done" readonly />
      </form>
    </div>
    <div class="addStudent">
      <h1>Assign students</h1>
      <form>
        <div class="txt_field">
          <input type="text" v-model="code" />
          <span></span>
          <label>Module Code</label>
        </div>
        <div class="txt_field">
          <input type="text" v-model="email" />
          <span></span>
          <label>Student Email</label>
        </div>
        <input id="button" @click="addStudentToModule" value="Add" readonly />
      </form>
    </div>
    <div class="custom-shape-divider-bottom-1679498594">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </body>
</template>

<script>
import app from "../api/firebase.js";
import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { getFunctions, httpsCallable } from "firebase/functions";
const functions = getFunctions(app);
const auth = getAuth(app);

export default {
  setup() {
    const lecturerName = ref("");

    const getLecturerNameFn = httpsCallable(functions, "getLecturerName");

    // Add an auth state change listener
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User: " + user.email);
        const userEmail = user.email;
        const email = { email: userEmail };
        const idToken = auth.currentUser.getIdToken();
        getLecturerNameFn(email, {
          headers: { Authorization: `Bearer ${idToken}` },
        })
          .then((resp) => {
            lecturerName.value = resp.data.name;
            console.log("Lecturer name:", lecturerName.value);
          })
          .catch((err) => {
            console.error("Error getting lecturer name:", err);
          });
      } else {
        console.log("No user is currently signed in.");
      }
    });

    return { lecturerName };
  },

  data() {
    return {
      moduleID: "",
      name: "",
      location: "",
      times: "",
      code: "",
      email: "",
      lecturer: "",
      colour: "#cf9fff",
    };
  },
  methods: {
    async moduleManagement() {
      this.$notify({
        type: "warn",
        title: "Please wait",
        text: "Attempting to manage your module...",
      });
      const moduleID = this.moduleID.toUpperCase();
      const name = this.name;
      const location = this.location;
      const lecturer = this.lecturerName;
      const colour = this.colour;
      const idToken = await auth.currentUser.getIdToken();
      const times = this.times.split(",");
      console.log("Attempting to manage the module");
      const moduleManagement = httpsCallable(functions, "moduleManagement");

      const data = {
        moduleID: moduleIDparsed,
        name: name,
        location: location,
        times: times,
        lecturer: lecturer,
        colour: colour,
      };
      moduleManagement(data, {
        headers: { Authorization: `Bearer ${idToken}` },
      }).then((result) => {
        if (result.data.message) {
          this.$notify({
            type: "success",
            title: "Success",
            text: result.data.message,
          });
        } else if (result.data.error) {
          this.$notify({
            type: "error",
            title: "Error",
            text: result.data.error,
          });
        } else {
          this.$notify({
            type: "error",
            title: "Error",
            text: "An unknown error occurred",
          });
        }
      });
    },
    getColourStyle() {
      return { border: "2px solid black" };
    },
    async addStudentToModule() {
      this.$notify({
        type: "warn",
        title: "Please wait",
        text: "Attempting to add student to module...",
      });
      const code = this.code.toUpperCase();
      const email = this.email;
      const idToken = await auth.currentUser.getIdToken();
      console.log("Attempting to add a student to module");
      const addStudentToModule = httpsCallable(functions, "addStudentToModule");

      const data = {
        code: code,
        email: email,
      };
      console.log(data);
      addStudentToModule(data, {
        headers: { Authorization: `Bearer ${idToken}` },
      }).then((result) => {
        console.log(result.data.message);
        console.log(result.data.error);
        if (result.data.message) {
          this.$notify({
            type: "success",
            title: "Success",
            text: result.data.message,
          });
        } else if (result.data.error) {
          this.$notify({
            type: "error",
            title: "Error",
            text: result.data.error,
          });
        } else {
          this.$notify({
            type: "error",
            title: "Error",
            text: "An unknown error occurred",
          });
        }
      });
    },
    selectColour(colour) {
      this.colour = colour;
      console.log(this.colour);
    },
    signOut() {
      signOut(auth)
        .then(() => {
          console.log("Signed out");
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error("Error signing out", error);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: bold !important;
}

.loginimg img {
  z-index: 1;
  position: absolute;
  top: 6%;
  left: 5.5%;
  height: 8%;
  width: 5%;
}

.signouticon {
  position: absolute;
  top: 9%;
  right: 10%;
  height: 4%;
  width: 4%;
  display: block;
  z-index: 2;
}

body {
  background-color: rgb(60, 58, 185);
  overflow: hidden;
  height: 92%;
  width: 92%;
}

.addModule {
  z-index: 2;
  position: absolute;
  top: 25%;
  left: 8%;
  width: 45%;
  height: 55%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(23, 2, 32, 1);
  color: rgb(37, 37, 37);
}

.addModule h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}

.addModule form {
  padding: 0 40px;
  padding-bottom: 40px;
  padding-top: 10%;
}

.addStudent {
  z-index: 2;
  position: absolute;
  top: 25%;
  left: 60%;
  width: 30%;
  height: 55%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(23, 2, 32, 1);
  color: rgb(37, 37, 37);
}

.addStudent h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}

.addStudent form {
  padding: 0 70px;
  padding-bottom: 80px;
  position: absolute;
  top: 30%;
  left: 20%;
}

form .txt_field {
  position: relative;
  margin: 45px 0;
  width: 120%;
}

.txt_field input {
  width: 80%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.txt_field label {
  position: absolute;
  left: 5px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  height: 2px;
  background: rgb(46, 78, 141);
}

.txt_field label {
  top: -5px;
  color: rgb(46, 78, 141);
}

.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 80%;
}

#button {
  position: absolute;
  width: 50%;
  height: 50px;
  top: 82%;
  left: 25%;
  border: 1px solid;
  background: rgb(46, 78, 141);
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  text-align: center;
}

#signout {
  width: 8%;
  height: 6%;
  background: white;
  border-radius: 10px;
  font-size: 15px;
  color: rgb(37, 37, 37);
  cursor: pointer;
  outline: none;
  text-align: left;
  position: absolute;
  top: 8%;
  right: 10%;
}

#signout:hover {
  transition: transform 0.3s;
  transform: scale(1.1);
}

.custom-shape-divider-bottom-1679498594 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1679498594 svg {
  position: relative;
  display: block;
  width: calc(220% + 1.3px);
  height: 195px;
}

.custom-shape-divider-bottom-1679498594 .shape-fill {
  fill: #ffffff;
}

.greeting {
  font-size: 40px;
  position: absolute;
  left: 12%;
  top: 7.5%;
  display: inline-block;
  color: white;
  text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
}

ul {
  cursor: pointer;
  transition: transform 0.3s;
}

ul div:hover {
  transform: scale(1.1);
}

.violet {
  background-color: #cf9fff;
  position: absolute;
  top: 125%;
  left: 0%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.orange {
  background-color: #ff5733;
  position: absolute;
  top: 125%;
  left: 25%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.lightorange {
  background-color: #ff8d1a;
  position: absolute;
  top: 125%;
  left: 50%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.brown {
  background-color: #ad9176;
  position: absolute;
  top: 125%;
  left: 75%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.lightgreen {
  background-color: #add45c;
  position: absolute;
  top: 165%;
  left: 0%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.green {
  background-color: #57c785;
  position: absolute;
  top: 165%;
  left: 25%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.teal {
  background-color: #00baad;
  position: absolute;
  top: 165%;
  left: 50%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}
.blue {
  background-color: #2a7b9b;
  position: absolute;
  top: 165%;
  left: 75%;
  width: 20%;
  height: 30%;
  border-radius: 50%;
}

.leftside {
  position: absolute;
  left: 15%;
  top: 25%;
}

.rightside {
  position: absolute;
  left: 60%;
  top: 25%;
}

.divider {
  content: "";
  position: absolute;
  top: 48%;
  left: 32%;
  width: 35%;
  height: 2px;
  background: silver;
  display: inline-block;
  transform: rotate(90deg);
}

@media screen and (max-width: 1400px) {
  .addModule {
    z-index: 2;
    position: absolute;
    top: 20%;
    left: 6%;
    width: 50%;
    height: 65%;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(23, 2, 32, 1);
    color: rgb(37, 37, 37);
  }

  .addModule h1 {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid silver;
  }

  .addModule form {
    padding-bottom: 100px;
    padding-right: 20px;
    top: 30%;
    left: 5%;
  }

  .addStudent {
    z-index: 2;
    position: absolute;
    top: 20%;
    left: 65%;
    width: 30%;
    height: 65%;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(23, 2, 32, 1);
    color: rgb(37, 37, 37);
  }

  .addStudent h1 {
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid silver;
  }

  .addStudent form {
    padding: 0 30px;
    padding-bottom: 100px;
    position: absolute;
    top: 30%;
    left: 10%;
  }

  form .txt_field {
    position: relative;
    margin: 30px 0;
  }

  .txt_field input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
  }

  .txt_field label {
    position: absolute;
    left: 5px;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: 0.5s;
  }

  .txt_field span::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    height: 2px;
    background: rgb(46, 78, 141);
  }

  .txt_field label {
    top: -5px;
    color: rgb(46, 78, 141);
  }

  .txt_field input:focus ~ span::before,
  .txt_field input:valid ~ span::before {
    width: 80%;
  }

  #button {
    position: absolute;
    width: 50%;
    height: 50px;
    top: 82%;
    left: 25%;
    border: 1px solid;
    background: rgb(46, 78, 141);
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    text-align: center;
  }

  .signouticon {
  position: absolute;
  top: 9%;
  right: 9.2%;
  height: 4%;
  width: 4%;
  display: block;
  z-index: 2;
}

.leftside {
  position: absolute;
  left: 10%;
  top: 25%;
}

#signout {
  width: 10%;
}

.rightside {
  position: absolute;
  left: 58%;
  top: 25%;
}
}
</style>
