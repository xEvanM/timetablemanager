<template>
  <head>
    <title>Sign Up</title>
  </head>
  <body>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="websiteName">TimetablePro</div>
    <div class="sloganText1">Your Timetable,</div>
    <div class="sloganText2">Made easy</div>
    <div class="center">
      <h1>Sign Up</h1>
      <form>
        <div class="txt_field">
          <input type="email" v-model="email" />
          <span></span>
          <label>Enter Email</label>
        </div>
        <div class="txt_field">
          <input type="password" v-model="password" />
          <span></span>
          <label>Create Password</label>
        </div>
        <input id="button" @click="reg" value="Sign up" readonly />
        <div class="signup_link">
          Already have an account? <a href="#">Log In</a>
        </div>
      </form>
    </div>
  </body>
</template>

<script setup>
import app from "../api/firebase.js";
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const reg = () => {
  console.log("register called");
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Registered!");
      router.push("/student"); // redirect to student page - will update this to send to STUDENT or LECTURER depending on credentials
    })
    .catch((error) => {
      console.log("Error: " + error.code);
      alert(error.message);
    });
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
  top: 4%;
  left: 2%;
  height: 11%;
  width: 6%;
}

.websiteName {
  font-size: 30px;
  color: white;
  position: absolute;
  top: 7%;
  left: 9%;
}

.sloganText1 {
  z-index: 1;
  font-size: 40px;
  color: white;
  position: absolute;
  left: 13%;
  top: 40%;
  display: inline-block;
}

.sloganText2 {
  z-index: 1;
  font-size: 45px;
  color: white;
  position: absolute;
  left: 15%;
  top: 47%;
  display: inline-block;
}

body {
  background-color: rgb(46, 78, 141);
  height: 92%;
  width:92%;
  overflow: hidden;
}

.center {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(23, 2, 32, 1);
}

.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}

.center form {
  padding: 0 40px;
}

form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
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
  top: 50%;
  left: 5px;
  color: #adadad;
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
  width: 0%;
  height: 2px;
  background: rgb(46, 78, 141);
  transition: 0.5s;
}

.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: rgb(46, 78, 141);
}

.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}

.pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}

.pass:hover {
  text-decoration: underline;
}

#button {
  width: 100%;
  height: 50px;
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

#button:hover {
  border-color: rgb(46, 78, 141);
  transition: 0.5s;
}

.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #a6a6a6;
}

.signup_link a {
  color: rgb(46, 78, 141);
  text-decoration: none;
}

.signup_link a:hover {
  text-decoration: underline;
}
</style>
