<template>
  <head>
    <title>Student</title>
  </head>
  <body>
    <div class="greeting">Hello, User!</div>
    <div class="profilepic">
      <img src= https://www.pngall.com/wp-content/uploads/5/Biden.png>
    </div>
    <input id="button" @click="reg" value="Sign Out" readonly />
    <table align="center">
      <tr>
        <th class="time">Time/Day</th>
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
        <td></td>
      </tr>
    </table>
  </body>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid;
  width: 90%;
  margin-top: 5%;
  table-layout: fixed;
  overflow: hidden;
}

tr {
  height: 45px;
}

.time {
  width: 30%;
}

.greeting {
  font-size: 40px;
  color: black;
  position: absolute;
  left: 6%;
  top: 2%;
  font-weight: bold;
  display: inline-block;
}

#button {
  width: 7%;
  height: 5%;
  border: 1px solid;
  background: rgb(46, 78, 141);
  border-radius: 25px;
  font-size: 15px;
  color: #e9f4fb;
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
  top: 2%;
  right: 14%;
  height: 8%;
  width: 5%;
}
</style>
