<template>
<head>
    <link href="main2.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Inter&amp;display=swap" rel="stylesheet">
    <title>Daily View</title>
</head>
<body>
    <div class="loginimg">
        <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
    </div>
    <div class="background"></div>
    <span class="viewText">Here's Today's Timetable!</span>
    <div class="background2">
        <table class="table">
            <tr>
                <th>Monday, 12th of March</th>
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

<style scoped> .background {
    margin:0px;
    background: rgba(21, 38, 70, 1);
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
body{
    margin:0px;
    padding:0px;
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
    background: rgba(26, 77, 123, 1);
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
}
.table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    font-size: 20px;
    text-align: 20% right;
  }
  
  .table td, .table th {
    padding: 10px;
  }


  th {
    color: black;
    font-size: 22px;
  }


  .viewbutton {
    width: 8%;
    height: 6%;
    border: 1px solid white;
    background: black;
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
    border-color: black;
    transition: 0.5s;
  }
</style>
