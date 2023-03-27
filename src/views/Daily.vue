<template>
  <head>
    <title>Daily View</title>
  </head>
  <body>
    <div class="loginimg">
      <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="box"></div>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>

    <svg
      class="leftarrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        value="left"
        @click="handleClick('left')"
        fill="currentColor"
        d="m12 16l1.4-1.4l-1.6-1.6H16v-2h-4.2l1.6-1.6L12 8l-4 4l4 4Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      />
    </svg>
    <svg
      class="rightarrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        value="right"
        @click="handleClick('right')"
        fill="currentColor"
        d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
      />
    </svg>
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
    <svg
      class="viewicon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
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
    <div class="greeting">{{ name }}'s Schedule for {{ currentDay }}</div>
    <input id="button" @click="signOut" value=" Sign Out" readonly />
    <input id="viewbutton" @click="weekly" value=" Weekly View" readonly />
    <table>
      <tr>
        <th class="topleft"></th>
        <th>Class</th>
        <th>Location</th>
        <th>Lecturer</th>
      </tr>
      <tr v-for="hour in hours" :key="hour">
        <td class="time">{{ hour }}</td>
        <td :class="schedule[hour]?.name ? 'lecture' : ''">
          {{ schedule[hour]?.name }}
        </td>
        <td :class="schedule[hour]?.location ? 'lecture' : ''">
          {{ schedule[hour]?.location }}
        </td>
        <td :class="schedule[hour]?.lecturer ? 'lecture' : ''">
          {{ schedule[hour]?.lecturer }}
        </td>
      </tr>
    </table>
  </body>
</template>

<script>
// import { Icon } from "@iconify/vue";
import firebase from "../api/firebase.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../api/firebase.js";
import { getFunctions, httpsCallable } from "firebase/functions";
import { ref, computed } from "vue";
const functions = getFunctions(app);
const auth = getAuth(app);
export default {
  data() {
    return {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      hours: ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"],
      modules: [],
      schedule: {},
      daysOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      currentDayIndex: (() => {
        const dayIndex = new Date().getDay();
        if (dayIndex === 6) {
          // Saturday
          return 1; // Monday
        } else if (dayIndex === 0) {
          // Sunday
          return 1; // Monday
        } else {
          return dayIndex;
        }
      })(),
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.fetchModules();
      console.log("Mounted!");
    });
  },
  setup() {
    const name = ref("");

    const fetchFirstName = async () => {
      try {
        console.log("Attempting to get student first name");
        const addModule = httpsCallable(functions, "getFirstName");
        const email = auth.currentUser.email;
        const data = {
          email: email,
        };
        console.log(data);
        const jsonData = JSON.stringify(data);
        console.log(jsonData);
        const result = await addModule(data);
        console.log(result);
        name.value = result.data;
      } catch (error) {
        console.error("Error retrieving student first name", error);
      }
    };
    fetchFirstName();

    return {
      name,
    };
  },
  computed: {
    currentDay() {
      return this.daysOfWeek[this.currentDayIndex];
    },
  },
  methods: {
    async fetchModules() {
      try {
        console.log("Fetching student modules");
        const getModules = httpsCallable(functions, "getModulesStudied");
        const email = auth.currentUser.email;
        const result = await getModules({ email });
        console.log(result);
        this.modules = result.data;
        this.populateSchedule(this.modules);
      } catch (error) {
        console.error("Error fetching student modules", error);
      }
    },
    populateSchedule(modules, currentDay) {
      console.log("Populating schedule");
      if (!Array.isArray(modules)) {
        console.error("Invalid modules array:", modules);
        return;
      }
      modules.forEach((module) => {
        module.times.forEach((time) => {
          const dayCode = time.substr(0, 2).toLowerCase();
          const curr = this.currentDay.toLowerCase();
          if (!curr.startsWith(dayCode)) {
            return;
          }
          const hourIndex = parseInt(time.substr(2)) - 9;
          const hour = this.hours[hourIndex];
          if (!this.schedule[hour]) {
            this.schedule[hour] = {};
          }
          this.schedule[hour] = {
            name: module.name,
            lecturer: module.lecturer,
            location: module.location,
          };
          console.log("Added " + module.name + " to " + hour);
        });
      });
    },
    signOut() {
      signOut(auth)
        .then(() => {
          console.log("Signed out");
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error signing out", error);
        });
    },
    weekly() {
      this.$router.push("/student");
    },
    handleClick(pathID) {
      this.schedule = [];
      console.log("Clicked path: " + pathID);
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      if (pathID === "left") {
        this.currentDayIndex =
          (this.currentDayIndex + days.length - 1) % days.length;
        this.populateSchedule(this.modules, this.currentDay);
        if (this.currentDayIndex === 0) {
          this.currentDayIndex = 5;
          this.populateSchedule(this.modules, this.currentDay);
        }
      } else {
        this.currentDayIndex = (this.currentDayIndex + 1) % days.length;
        this.populateSchedule(this.modules, this.currentDay);
        if (this.currentDayIndex === 6) {
          this.currentDayIndex = 1;
          this.populateSchedule(this.modules, this.currentDay);
        }
      }
    },
  },
};
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
  left: 12%;
  width: 70%;
  height: 85%;
  display: table;
  text-align: center;
  overflow: hidden;
  font-size: 20px;
  border-spacing: 70px 5px;
  table-layout: fixed;
  overflow: hidden;
}

th {
  color: rgb(37, 37, 37);
  font-size: 22px;
  text-align: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.lecture {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: rgb(204, 0, 0);
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

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
  left: 25.65%;
  height: 86%;
  width: 16%;
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
  left: 43.9%;
  height: 86%;
  width: 16%;
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
  left: 62.2%;
  height: 86%;
  width: 16%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 5px 0px rgba(23, 2, 32, 1);
}

.box {
  width: 67%;
  height: 88%;
  position: absolute;
  top: 10.5%;
  left: 14.5%;
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
  text-align: left;
}

#button:hover {
  border-color: rgb(46, 78, 141);
  transition: 0.5s;
}

#viewbutton {
  width: 10.2%;
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
  text-align: left;
}

#viewbutton:hover {
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

.leftarrow {
  position: absolute;
  top: 45%;
  left: 7.5%;
  height: 12%;
  width: 12%;
  cursor: pointer;
  display: block;
  z-index: 2;
  clip-path: circle(25% at 50% 50%);
}

.rightarrow {
  position: absolute;
  top: 45%;
  right: 11.6%;
  height: 12%;
  width: 12%;
  cursor: pointer;
  display: block;
  z-index: 2;
  clip-path: circle(25% at 50% 50%);
}

.rightarrow:hover,
.leftarrow:hover {
  border: 1px solid white;
  transition: 0.5s;
}

.signouticon {
  position: absolute;
  top: 4%;
  right: 5.3%;
  height: 4%;
  width: 4%;
  display: block;
  z-index: 2;
}

.viewicon {
  position: absolute;
  top: 4%;
  right: 14.3%;
  height: 4%;
  width: 4%;
  display: block;
  z-index: 2;
}
</style>
