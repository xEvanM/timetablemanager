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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2398%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='url(%23SvgjsLinearGradient2399)'%3e%3c/rect%3e%3cpath d='M1519.331%2c869.044C1623.465%2c868.384%2c1709.516%2c793.302%2c1757.356%2c700.805C1801.318%2c615.806%2c1792.328%2c516.265%2c1744.729%2c433.248C1696.853%2c349.748%2c1615.583%2c285.91%2c1519.331%2c285.669C1422.712%2c285.427%2c1340.562%2c348.603%2c1291.973%2c432.116C1243.067%2c516.174%2c1231.133%2c617.585%2c1276.024%2c703.854C1324.523%2c797.057%2c1414.267%2c869.71%2c1519.331%2c869.044' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M22.745%2c1131.732C69.767%2c1132.48%2c111.916%2c1107.893%2c138.537%2c1069.125C169.91%2c1023.439%2c196.523%2c965.916%2c170.041%2c917.232C142.826%2c867.201%2c79.589%2c852.716%2c22.745%2c856.259C-27.78%2c859.408%2c-72.368%2c888.956%2c-95.85%2c933.803C-117.733%2c975.596%2c-111.08%2c1025.071%2c-86.833%2c1065.538C-63.325%2c1104.771%2c-22.986%2c1131.004%2c22.745%2c1131.732' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M643.863%2c907.906C697.392%2c910.313%2c738.498%2c863.651%2c761.988%2c815.491C782.58%2c773.274%2c777.253%2c724.505%2c752.915%2c684.331C729.524%2c645.721%2c688.949%2c622.772%2c643.863%2c620.505C593.977%2c617.997%2c537.941%2c628.477%2c514.009%2c672.32C490.662%2c715.091%2c519.287%2c762.96%2c542.809%2c805.635C567.605%2c850.62%2c592.549%2c905.598%2c643.863%2c907.906' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M713.42 370 a302.89 302.89 0 1 0 605.78 0 a302.89 302.89 0 1 0 -605.78 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1347.57 163.55 a275.45 275.45 0 1 0 550.9 0 a275.45 275.45 0 1 0 -550.9 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M209.782%2c914.146C296.974%2c910.335%2c379.693%2c874.706%2c426.213%2c800.863C476.08%2c721.706%2c489.598%2c622.317%2c445.66%2c539.722C399.14%2c452.272%2c308.831%2c392.97%2c209.782%2c394.01C112.332%2c395.033%2c31.814%2c460.63%2c-17.673%2c544.585C-68.075%2c630.093%2c-94.129%2c736.802%2c-42.103%2c821.332C8.166%2c903.007%2c113.968%2c918.334%2c209.782%2c914.146' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M160.424%2c738.053C190.396%2c736.947%2c212.026%2c711.29%2c224.777%2c684.143C235.601%2c661.098%2c232.025%2c635.047%2c219.11%2c613.106C206.411%2c591.531%2c185.413%2c576.326%2c160.424%2c574.813C132.414%2c573.117%2c103.098%2c581.523%2c87.983%2c605.165C71.808%2c630.466%2c72.912%2c662.85%2c87.285%2c689.216C102.324%2c716.803%2c129.025%2c739.211%2c160.424%2c738.053' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-88.05 1034.84 a244.8 244.8 0 1 0 489.6 0 a244.8 244.8 0 1 0 -489.6 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2398'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='89.06%25' y1='119.44%25' x2='10.94%25' y2='-19.44%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2399'%3e%3cstop stop-color='rgba(10%2c 23%2c 72%2c 1)' offset='0.39'%3e%3c/stop%3e%3cstop stop-color='rgba(21%2c 59%2c 137%2c 0.74)' offset='0.8'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
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
