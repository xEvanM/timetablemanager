<template>
  <head>
    <title>Student</title>
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
    <div class="banner"></div>
    <div class="greeting">Hello, User!</div>

    <input id="button" @click="reg" value="Sign Out" readonly />
    <table align="center">
      <tr>
        <th class="topleft"></th>
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

body {
  height: 100vh;
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
  top: 12%;
  left: 2%;
  height: 85%;
  width: 88%;
  display: table;
  text-align: center;
  overflow: hidden;
  font-size: 20px;
  border-spacing: 5px 3px;
  table-layout: fixed;
  overflow: hidden;
}

th {
  color: black;
  font-size: 22px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

tr {
  height: 45px;
}

td {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.topleft {
  border: 0;
  width: 1%;
  background: rgba(26, 77, 123, 1);
}

.loginimg img {
  z-index: 1;
  position: absolute;
  top: 1%;
  left: 2%;
  height: 8%;
  width: 5%;
}

.time {
  border: 0;
}

.box1 {
  background: rgba(217, 217, 217, 1);
  position: absolute;
  top: 11%;
  left: 11%;
  height: 88%;
  width: 16%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.box {
  width: 90%;
  height: 88%;
  position: absolute;
  top: 11%;
  left: 1%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgba(26, 77, 123, 1);
}

.time,
.bottomleft,
.topleft {
  width: 10%;
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

.banner {
  background-color: lightgrey;
  position: absolute;
  top: 0;
  width: 100%;
  height: 10%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}
</style>
