<template>
  <head>
      <link href="main2.css" rel="stylesheet">
      <title>Daily View</title>
  </head>
  <body>
      <div class="loginimg">
          <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
      </div>
      <div class="background"></div>
  
      <span class="viewText">Here's Today's Timetable!</span>
      <div class="background2"><div class="box1"></div>
        <span class="DateText">Monday, 14th of March</span>
        <div class="box2"></div>
        <div class="ArrowRight">&#62;</div>
        <div class="ArrowLeft">&#60;</div>
        <div class="box3"></div>
    
          <table class="table">
              <tr>
                  <td>9:00am</td>
                  <td>CT103: Programming</td>
                  <td>IT250</td>
                  <td>Dr. Frank Glavin</td>
              </tr>
              <tr>
                  <td>10:00am</td>
                  <td>CT:230</td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>11:00am</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>12:00am</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>1:00pm</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>2:00pm</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>3:00pm</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>4:00pm</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>5:00pm</td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </table>
        </div>
      <div class="viewbutton">Weekly View</div>
    
  </body>
  </template>
  
  <script>

  </script>
  
  <style scoped> 
  .background {
      margin:0px;
      background: rgb(3, 4, 94,);
      height: 92%;
      width: 92%;
      position: absolute;
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
  
  .loginimg img {
      z-index: 1;
      position: absolute;
      top: 1%;
      left: 5.5%;
      height: 8%;
      width: 4%;
  }
  .viewText {
          font-size: 35px;
          position: absolute;
          left: 10.5%;
          top: 1%;
          display: inline-block;
          color: white;
  }
  .background2 {
      height: 85%;
      width:88%;
      background: rgb(0, 119, 182);
      opacity: 1;
      position: absolute;
      top: 11%;
      left: 6%;
      right: 10%;
      bottom: 8%;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
      border-bottom-left-radius: 35px;
      border-bottom-right-radius: 35px;
      z-index: 1;
  }
  .table {
      width: 90%;
      height: 88%;   
      border-collapse: collapse;
      font-size: 150%;
      color: rgb(37, 37, 37);
      text-align: center;
      margin: auto;
      z-index: 2;
      position: relative;
      margin-top: 5%;
    }
  
    .table td, .table th {
      margin: center;
      padding: 1%;
      z-index: 2;
    }
  
    th {
      color: rgb(	37, 37, 37);
      font-size: 20px;
    }
  
  
  
    .viewbutton {
      width: 8%;
      height: 6%;
      border: 1px solid white;
      background:rgb(	37, 37, 37);
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
      z-index: 2;
    }
    .viewbutton:hover {
      border-color: rgb(	37, 37, 37);
      transition: 0.5s;
      z-index: 1;
    }



    .ArrowRight {
      width: 8%;
      height: 8%;
      border: 1px solid white;
      background:rgb(	37, 37, 37);
      border-radius: 50%;
      font-size: 50px;
      color: white;
      font-weight: 700;
      cursor: pointer;
      outline: none;
      position: absolute;
      top: 45%;
      right: -5%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
    }
    .ArrowRight:hover {
      border-color: rgb(	37, 37, 37);
      transition: 0.5s;
    }


    .ArrowLeft {
      width: 8%;
      height: 8%;
      border: 1px solid white;
      background:rgb(	37, 37, 37);
      font-size: 50px;
      color: white;
      font-weight: 700;
      cursor: pointer;
      outline: none;
      position: absolute;
      top:45%;
      left: -5%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 3;
      border-radius: 50%
    }
    .ArrowLeft:hover {
      border-color: rgb(	37, 37, 37);
      transition: 0.5s;
    }
    .box2 {
    background: rgb(3, 4, 94,);
    position: absolute;
    top: 11.5%;
    left: 5%;
    height: 86%;
    width: 12%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 2;
  }
  .box3 {
    background: rgb(0, 180, 216);
    position: absolute;
    top: 11.5%;
    left: 20%;
    height: 86%;
    width: 76%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 2;
  }

  .DateText {
          font-size: 230%;
          position: absolute;
          left: 5%;
          top: 2%;
          display: inline-block;
          color: rgb(	37, 37, 37);
  }
  .box1 {
      width: 35%;
      height: 8%;
      background: rgb(193, 18, 31);
      position: absolute;
      top: 1.5%;
      left: 2.5%;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  </style>
  