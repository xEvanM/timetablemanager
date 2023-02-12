<template>
  <head>
    <title>Student</title>
  </head>
  <body>
    <div class="banner"></div>
    <div class="greeting">Hello, User!</div>
    <div class="profilepic">
      <img src= https://www.pngall.com/wp-content/uploads/5/Biden.png>
    </div>
    <input id="button" @click="reg" value="Sign Out" readonly />
    <table align="center">
      <tr>
        <th class="topleft">Time/Day</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th class="topright">Friday</th>
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
        <td class="example">Comp sys<br />IT125</td>
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
        <td class="bottomleft">5:00pm</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="bottomright"></td>
      </tr>
    </table>
  </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

body {
  background-color: white;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(46, 78, 141);
}

* {
  color: white;
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: bold !important;
  z-index: 1;
}

table,
th,
td {
  margin-left: 5%;
  width: 90%;
  margin-top: 5%;
  table-layout: fixed;
  overflow: hidden;
  text-align: center;
  border-spacing: 5px 3px;
  border-collapse: separate;
  font-size: 20px;
}

th {
  background-color: rgb(46, 78, 141);
}

tr {
  height: 45px;
}

td {
  /* background-color: lightgrey; */
  border: 1px solid;
}

.bottomright {
  border-bottom-right-radius: 25px;
}

.bottomleft {
  border-bottom-left-radius: 25px;
  background-color: lightgrey;
}

.topleft {
  border-top-left-radius: 25px;
}

.topright {
  border-top-right-radius: 25px;
}

.time {
  background-color: lightgrey;
}

.time,
.bottomleft,
.topleft {
  width: 50%;
}

.example {
  background-color: lightgrey;
  font-size: 14px;
  color: black;
}
.greeting {
  font-size: 35px;
  position: absolute;
  left: 6%;
  top: 1%;
  display: inline-block;
  color: black;
}

#button {
  width: 7%;
  height: 5%;
  border: 1px solid;
  background: rgb(46, 78, 141);
  border-radius: 25px;
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

.profilepic img {
  position: absolute;
  top: 1%;
  right: 14%;
  height: 8%;
  width: 5%;
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
</style>
