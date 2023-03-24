<template>
  <head>
    <title>Weekly View</title>
  </head>
  <body>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="box"></div>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="viewbutton">Daily View</div>
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
    <div class="greeting">Welcome, {{name}}!</div>

    <input id="button" @click="reg" value="Sign Out" readonly />
    <table>
      <tr>
        <th class="topleft"></th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
      </tr>
      <tr>
        <td class="time">9:00am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">10:00am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">11:00am</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">12:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">1:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">2:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">3:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">4:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="time">5:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="bottomright"></td>
      </tr>
    </table>
  </body>
</template>

<script>
import firebase from '../api/firebase.js'
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth" ;
import app from '../api/firebase.js';
import { getFunctions, httpsCallable } from "firebase/functions";
import { ref } from 'vue';
const functions = getFunctions(app);
const auth = getAuth(app);
export default {
  setup() {
    const name = ref('');

    const fetchFirstName = async () => {
      try {
        console.log("Attempting to get student first name");
        const addModule = httpsCallable(functions, "getFirstName");
        const email = auth.currentUser.email;
        const data = {
          email: email
        };
        console.log(data);
        const jsonData = JSON.stringify(data);
        console.log(jsonData);
        const result = await addModule(data);
        console.log(result);
        name.value = result.data;
      } catch (error) {
        console.error('Error retrieving student first name', error);
      }
    }

    fetchFirstName();

    return {
      name
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

body {
  height: 92%;
  width: 92%;
  overflow: hidden;
  background: rgba(21, 38, 70, 1);
}

* {
  color: white;
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: bold !important;
}

table {
  position: absolute;
  top: 11%;
  left: 5%;
  width: 85%;
  height: 85%;
  display: table;
  text-align: center;
  overflow: hidden;
  font-size: 20px;
  border-spacing: 30px 5px;
  table-layout: fixed;
  overflow: hidden;
}

th {
  color: rgb(37, 37, 37);
  font-size: 22px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

/* td {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgb(204, 0, 0);
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
} */

.topleft {
  border: 0;
  background: #8ca6be;
}

.loginimg img {
  z-index: 1;
  position: absolute;
  top: 1%;
  left: 5.5%;
  height: 8%;
  width: 4%;
}

.time {
  border: 0;
  background: #8ca6be;
  box-shadow: none;
  text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
  color: white;
}

.box1 {
  background: rgba(217, 217, 217, 1);
  position: absolute;
  top: 12%;
  left: 15.6%;
  height: 86%;
  width: 14%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.box2 {
  background: rgba(217, 217, 217, 1);
  position: absolute;
  top: 12%;
  left: 30.5%;
  height: 86%;
  width: 14%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.box3 {
  background: rgba(217, 217, 217, 1);
  position: absolute;
  top: 12%;
  left: 45.2%;
  height: 86%;
  width: 14%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.box4 {
  background: rgba(217, 217, 217, 1);
  position: absolute;
  top: 12%;
  left: 59.9%;
  height: 86%;
  width: 14%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.box5 {
  background: rgba(217, 217, 217, 1);
  position: absolute;
  top: 12%;
  left: 74.8%;
  height: 86%;
  width: 14%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.box {
  width: 85%;
  height: 88%;
  position: absolute;
  top: 10.5%;
  left: 6%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #8ca6be;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.time,
.bottomleft,
.topleft {
  width: 10%;
}

.greeting {
  font-size: 35px;
  position: absolute;
  left: 10.5%;
  top: 1.5%;
  display: inline-block;
  color: white;
  text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
}

#button {
  width: 8%;
  height: 6%;
  border: 2px solid;
  background: white;
  border-radius: 10px;
  font-size: 15px;
  color: rgb(37, 37, 37);
  cursor: pointer;
  outline: none;
  text-align: center;
  position: absolute;
  top: 3%;
  right: 6%;
}

#button:hover {
  border-color: rgb(46, 78, 141);
  transition: 0.5s;
}

.viewbutton {
  width: 8%;
  height: 6%;
  border: 1px solid white;
  background: rgb(37, 37, 37);
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 3%;
  right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.viewbutton:hover {
  border-color: rgb(37, 37, 37);
  transition: 0.5s;
}

.custom-shape-divider-bottom-1679498594 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: -1;
}

.custom-shape-divider-bottom-1679498594 svg {
  position: relative;
  display: block;
  width: calc(220% + 1.3px);
  height: 195px;
  z-index: -1;
}

.custom-shape-divider-bottom-1679498594 .shape-fill {
  fill: #ffffff;
}
</style>
