<template>
  <head>
    <title>Forgot Password</title>
  </head>
  <body>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="websiteName">TimetablePro</div>
    <div class="sloganText1">Your Timetable, <br />Made easy</div>
    <div class="sloganText2">
      {{ quoteText }} <br />
      {{ authorText }}
    </div>
    <div class="center">
      <h1>Password Reset</h1>
      <form>
        <div class="txt_field">
          <input type="email" v-model="email" />
          <span></span>
          <label>Your Email</label>
        </div>
        <input id="button" @click="reset" value="Reset Password" readonly />
        <div class="signup_link">
          Remember your password? <a href="#" @click="login">Log In</a>
        </div>
      </form>
    </div>
    <svg
      class="emailicon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
      />
    </svg>
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
import { useRouter } from "vue-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import axios from "axios";

const auth = getAuth();

export default {
  data() {
    return {
      email: "",
      password: "",
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
    reset() {
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.$notify({
            type: "success",
            title: "Success",
            text: "Password reset email sent to " + this.email,
          });
        })
        .catch((error) => {
          console.log(error.message);
          this.$notify({
            type: "error",
            title: "Error",
            text: "Incorrect or invalid email. Try again!",
          });
          // other error handling stuff goes here
        });
    },
    enterKeyPressed(event) {
      if (event.keyCode === 13) {
        this.reset();
      }
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
  height: 92%;
  width: 92%;
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
  top: 46.5%;
  right: 20.5%;
  height: 3%;
  width: 3%;
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
    top: 32%;
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
    top: 52%;
    display: inline-block;
    text-shadow: 1px 1px 0px rgba(23, 2, 32, 1);
    text-align: center;
  }

  .emailicon {
  position: absolute;
  top: 45%;
  right: 17%;
  height: 4%;
  width: 4%;
  display: block;
  z-index: 2;
}
}
</style>
