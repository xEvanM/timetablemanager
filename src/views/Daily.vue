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
      <div class="box3"></div>
      <div class="box4"></div>
        <table class="table">
            <tr>
                <th></th>
                <th>Module</th>
                <th>Venue</th>
            </tr>
            <tr>
                <td>9am</td>
                <td>Row 1, Column 2</td>
                <td>Row 1, Column 3</td>
            </tr>
            <tr>
                <td>10am</td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
            </tr>
            <tr>
                <td>11am</td>
                <td>Row 3, Column 2</td>
                <td>Row 3, Column 3</td>
            </tr>
            <tr>
                <td>12am</td>
                <td>Row 4, Column 2</td>
                <td>Row 4, Column 3</td>
            </tr>
            <tr>
                <td>1pm</td>
                <td>Row 5, Column 2</td>
                <td>Row 5, Column 3</td>
            </tr>
            <tr>
                <td>2pm</td>
                <td>Row 6, Column 2</td>
                <td>Row 6, Column 3</td>
            </tr>
            <tr>
                <td>3pm</td>
                <td>Row 7, Column 2</td>
                <td>Row 7, Column 3</td>
            </tr>
            <tr>
                <td>4pm</td>
                <td>Row 8, Column 2</td>
                <td>Row 8, Column 3</td>
            </tr>
            <tr>
                <td>5pm</td>
                <td>Row 9, Column 2</td>
                <td>Row 9, Column 3</td>
            </tr>
            <tr>
                <td>6pm</td>
                <td>Row 10, Column 2</td>
                <td>Row 10, Column 3</td>
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
    height: 100%;
    width: 100%;
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
    height: 80%;
    width: 90%;
    background: rgb(0, 119, 182);
    opacity: 1;
    position: absolute;
    top: 15%;
    left: 5%;
    right: 10%;
    bottom: 8%;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    z-index: 1;
}
.table {
    width: 65%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 20px;
    color: rgb(37, 37, 37);
    text-align: 20% right;
    margin: auto;
    z-index: 2;
    position: relative;
  }

  .table td, .table th {
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
  }
  .viewbutton:hover {
    border-color: rgb(	37, 37, 37);
    transition: 0.5s;
  }
  .box2 {
  background: rgb(0, 180, 216);
  position: absolute;
  top: 11.5%;
  left: 13.5%;
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
  left: 59%;
  height: 86%;
  width: 17%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 2;
}
.box4 {
  background: rgb(0, 180, 216);
  position: absolute;
  top: 11.5%;
  left: 37%;
  height: 86%;
  width: 17%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 2;
}
.DateText {
        font-size: 40px;
        position: absolute;
        left: 5%;
        top: 2%;
        display: inline-block;
        color: rgb(	37, 37, 37);
}
.box1 {
    width: 35%;
    height: 9%;
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
