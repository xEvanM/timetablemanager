<template>
  <head>
    <title>Sign Up</title>
  </head>
  <body>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="websiteName">TimetablePro</div>
    <div class="sloganText1">
      Your Timetable,<br />
      Made easy
    </div>
    <div class="sloganText2">
      {{ quoteText }} <br />
      {{ authorText }}
    </div>
    <div class="center">
      <h1>Sign Up</h1>
      <form>
        <div class="txt_field">
          <input type="text" v-model="name" />
          <span></span>
          <label>{{ admin ? "Enter Full Name" : "Enter First Name" }}</label>
        </div>
        <div class="txt_field">
          <input type="email" v-model="email" />
          <span></span>
          <label>Enter Email</label>
        </div>
        <div class="txt_field" style="margin-bottom: 10px">
          <input type="password" v-model="password" />
          <span></span>
          <label>Create Password</label>
        </div>
        <div class="check_field">
          <input type="checkbox" v-model="admin" />
          <span></span>
          <label> Enable Admin Mode</label>
        </div>
        <div v-if="admin" class="txt_field_admin">
          <input type="password" v-model="auth" />
          <span></span>
          <label>Enter Admin Password</label>
        </div>
        <input id="button" @click="create" value="Sign up" readonly />
        <div class="signup_link">
          Already have an account? <a href="#" @click="login">Log In</a>
        </div>
      </form>
      <svg
        :class="admin ? 'emailicon2' : 'emailicon'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
        />
      </svg>
      <svg
        :class="admin ? 'nameicon2' : 'nameicon'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.85 17.1q1.275-.975 2.85-1.538T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.337T4 12q0 1.475.488 2.775T5.85 17.1ZM12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.012-2.488T12 6q1.475 0 2.488 1.012T15.5 9.5q0 1.475-1.012 2.488T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
        />
      </svg>
      <svg
        :class="admin ? 'passwordicon2' : 'passwordicon'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
        />
      </svg>
      <svg
        :class="[admin ? 'passwordicon3' : '', 'passwordicon']"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2ZM6 20V10v10Z"
        />
      </svg>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { getFunctions, httpsCallable } from "firebase/functions";
import axios from "axios";

const functions = getFunctions(app);
const auth = getAuth();

export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      auth: "",
      admin: false,
      quote: "Quote goes here",
      author: "Author goes here",
    };
  },
  created() {
    this.router = useRouter();
    this.getQuote();
    document.addEventListener("keydown", this.enterKeyPressed);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.enterKeyPressed);
  },
  computed: {
    quoteText() {
      return this.quote;
    },
    authorText() {
      return this.author;
    },
  },
  methods: {
    create() {
      if (this.admin == true) {
        this.$notify({
          type: "warn",
          title: "Please wait",
          text: "Attempting to create lecturer account...",
        });
        this.createLecturer();
      } else {
        this.$notify({
          type: "warn",
          title: "Please wait",
          text: "Attempting to create student account...",
        });
        this.createStudent();
      }
    },
    enterKeyPressed(event) {
      if (event.keyCode === 13) {
        this.create();
      }
    },
    async createStudent() {
      console.log("Attempting to create student");
      const createStudent = httpsCallable(functions, "createStudent");

      // Call reg() method inside createStudent() method
      this.reg();

      const data = {
        fname: this.name,
        email: this.email,
      };
      console.log(data);
      createStudent(data).then((result) => {
        console.log("Fn message:" + result.data.message);
        console.log("Fn error:" + result.data.error);
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
    async createLecturer() {
      console.log("Attempting to create lecturer");
      const createLecturer = httpsCallable(functions, "createLecturer");

      // Call reg() method inside createStudent() method
      this.reg();

      const data = {
        name: this.name,
        email: this.email,
        auth: this.auth,
      };
      console.log(data);
      createLecturer(data).then((result) => {
        console.log("Fn message:" + result.data.message);
        console.log("Fn error:" + result.data.error);
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
    // Move reg() method inside Vue instance
    reg() {
      console.log("sign up function was called");
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then(() => {
          console.log("User created successfully");
          // Wait for 2 seconds before navigating to another route after successful sign up
          setTimeout(() => {
            if (this.admin == true) {
              this.router.push("/lecturer");
              console.log("Pushing to lecturer route");
            } else {
              this.router.push("/student");
              console.log("Pushing to student route");
            }
          }, 2000);
        })
        .catch((error) => {
          console.log("Error creating user:", error);
          this.$notify({
            type: "error",
            title: "Error",
            text: "Email invalid, or password too weak... Try again!",
          });
        });
    },
    async getQuote() {
      try {
        const response = await axios.get(
          "https://api.quotable.io/random?minLength=100&maxLength=140"
        );
        this.qt = response.data.content;
        this.author = "-" + response.data.author;
        this.quote = "'" + this.qt + "'";
        return this.quote;
      } catch (error) {
        console.error(error);
        return "Error getting quote";
      }
    },
    login() {
      this.router.push("/login");
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
  top: 4%;
  left: 2%;
  height: 10%;
  width: 6%;
}

.websiteName {
  font-size: 30px;
  color: white;
  position: absolute;
  top: 7%;
  left: 9%;
  text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
}

.sloganText1 {
  z-index: 1;
  font-size: 40px;
  color: white;
  position: absolute;
  left: 18.2%;
  top: 38%;
  display: inline-block;
  text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
  text-align: center;
}

.sloganText2 {
  z-index: 1;
  font-size: 18px;
  color: #becddb;
  position: absolute;
  word-wrap: break-word;
  left: 10%;
  width: 35%;
  top: 53.5%;
  display: inline-block;
  text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
  text-align: center;
}

body {
  background-color: rgb(46, 78, 141);
  overflow: hidden;
  height: 92%;
  width: 92%;
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
  color: rgb(37, 37, 37);
}

.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}

.center form {
  padding: 0 40px;
}

form .check_field {
  align-items: center;
  justify-content: space-between;
  margin: 0px 0;
  margin-left: 5px;
  padding-top: 0px;
}
.check_field label {
  position: absolute;
  margin: 0;
  color: rgb(223, 79, 39);
  font-size: 16px;
  padding-left: 5px;
}

form .txt_field {
  position: relative;
  margin: 30px 0;
}

.txt_field input {
  width: 90%;
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
  width: 90%;
}

form .txt_field_admin {
  position: relative;
  margin: 20px 0;
  margin-bottom: 20px;
}

.txt_field_admin input {
  width: 90%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.txt_field_admin label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.txt_field_admin span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: rgb(223, 79, 39);
  transition: 0.5s;
}

.txt_field_admin input:focus ~ label,
.txt_field_admin input:valid ~ label {
  top: -5px;
  color: rgb(223, 79, 39);
}

.txt_field_admin input:focus ~ span::before,
.txt_field_admin input:valid ~ span::before {
  width: 90%;
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
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  text-align: center;
  margin-top: 10px !important;
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

.emailicon {
  position: absolute;
  top: 42%;
  right: 11%;
  height: 6%;
  width: 6%;
  display: block;
  z-index: 2;
}

.emailicon2 {
  position: absolute;
  top: 35%;
  right: 11%;
  height: 6%;
  width: 6%;
  display: block;
  z-index: 2;
}

.passwordicon {
  position: fixed;
  top: 57%;
  right: 11%;
  height: 6%;
  width: 6%;
  display: block;
  z-index: 2;
}

.passwordicon2 {
  position: absolute;
  top: 47%;
  right: 11%;
  height: 6%;
  width: 6%;
  display: block;
  z-index: 2;
}

.passwordicon3 {
  position: absolute;
  top: 64%;
  right: 11%;
  height: 6%;
  width: 6%;
  z-index: 2;
  display: block;
}

.nameicon {
  position: absolute;
  top: 27%;
  right: 11%;
  height: 6%;
  width: 6%;
  display: block;
  z-index: 2;
}

.nameicon2 {
  position: absolute;
  top: 22%;
  right: 11%;
  height: 6%;
  width: 6%;
  display: block;
  z-index: 2;
}

@media screen and (max-width: 1400px) {
  .sloganText1 {
    z-index: 1;
    font-size: 40px;
    color: white;
    position: absolute;
    left: 12%;
    top: 30%;
    display: inline-block;
    text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
    text-align: center;
  }

  .sloganText2 {
    z-index: 1;
    font-size: 18px;
    color: #becddb;
    position: absolute;
    word-wrap: break-word;
    left: 7%;
    width: 35%;
    top: 54%;
    display: inline-block;
    text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
    text-align: center;
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
    top: 6%;
    left: 9%;
    text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
  }
}
</style>
