<template>
  <head>
    <title>Lecturer Page</title>
  </head>
  <body>
    <div class="banner"></div>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="viewbutton">Weekly View</div>
    <input id="button" @click="reg" value="Sign Out" readonly />
    <div class="greeting">Hello, Lecturer!</div>
    <div class="moduleid">
      <label for="exampleFormControlInput1" class="form-label">Module ID</label>
      <input
        type="text"
        class="form-control"
        v-model="moduleID"
        id="exampleFormControlInput1"
        placeholder="CT101"
      />
    </div>

    <div class="teacher">
      <label for="exampleFormControlInput1" class="form-label">Taught By</label>
      <input
        type="text"
        class="form-control"
        v-model="taughtBy"
        id="exampleFormControlInput1"
        placeholder="f.glavin"
      />
    </div>
    <div class="times">
      <label for="exampleFormControlTextarea1" class="form-label">Times</label>
      <textarea
        class="form-control"
        v-model="times"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="addmodule">
      <button type="button" @click="addModule" class="btn btn-primary">
        Add Module
      </button>
    </div>
  </body>
</template>

<script>
import app from "../api/firebase";
import { getFunctions, httpsCallable } from "firebase/functions";
export default {
  data() {
    return {
      moduleID: "",
      taughtBy: "",
      times: "",
    };
  },
  created() {},
  methods: {
    addModule() {
      console.log("Attempting to add module");
      const functions = getFunctions(app);
      const addModule = httpsCallable(functions, "addModule");
      var data = {
        moduleID: this.moduleID,
        taughtBy: this.taughtBy,
        times: this.times,
      };
      console.log(data);
      addModule({
        moduleID: this.moduleID,
        taughtBy: this.taughtBy,
        times: this.times,
      }).then((result) => {
        console.log(result);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: bold !important;
  color: white;
  z-index: 1;
}

body {
  background-color: rgb(46, 78, 141);
  height: 100vh;
  overflow: hidden;
  color: black;
}

.moduleid {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 20%;
  height: 20%;
}

.teacher {
  position: absolute;
  top: 40%;
  left: 20%;
  width: 20%;
  height: 20%;
}

.times {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 20%;
  height: 20%;
}

.addmodule {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 20%;
  height: 20%;
}

input {
  color: black;
}

textarea {
  color: black;
}

.banner {
  background-color: lightgrey;
  z-index: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 10%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.greeting {
  font-size: 35px;
  position: absolute;
  left: 8%;
  top: 1%;
  display: inline-block;
  color: black;
}

#button {
  width: 7%;
  height: 5%;
  border: 1px solid;
  background: rgb(46, 78, 141);
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-weight: 700;
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
  border: 1px solid rgb(46, 78, 141);
  background: black;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  position: absolute;
  bottom: 4%;
  right: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.viewbutton:hover {
  border-color: black;
  transition: 0.5s;
}

.loginimg img {
  z-index: 1;
  position: absolute;
  top: 1%;
  left: 2%;
  height: 8%;
  width: 5%;
}
</style>
