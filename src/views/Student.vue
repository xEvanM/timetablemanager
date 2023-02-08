<template>

    <div class="background">
        <button type="button" class="button1">
            <span class="button1__text">Daily View</span>
            <span class="button1__icon">
                <ion-icon name="today-outline"></ion-icon>
            </span>
        </button>
        <button type="button" class="button2">
            <span class="button2__text">Profile</span>
            <span class="button2__icon">
                <ion-icon name="settings-outline"></ion-icon>
            </span>
        </button>
    </div>
    <span class="twelcome">Welcome, User!</span>
    <div class="background2"></div>
    <div class="MondayBox"></div><span class="MonText">Monday</span>
    <div class="TuesdayBox"></div><span class="TueText">Tuesday</span>
    <div class="WednesdayBox"></div><span class="WedText">Wednesday</span>
    <div class="ThursdayBox"></div><span class="ThurText">Thursday</span>
    <div class="FridayBox"></div><span class="FriText">Friday</span>

    <span class="v1_9">9:00</span><span class="v1_10">10:00</span><span class="v1_11">11:00</span>
    <span class="v1_12">12:00</span><span class="v1_13">13:00</span><span class="v1_14">14:00</span>
    <span class="v1_16">16:00</span><span class="v1_15">15:00</span><span class="v1_17">17:00</span>

    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>

    <span class="module1">Software Engineering</span>
    <span class="Room1">IT106</span>
</template>


<script>
</script>
 

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap');

* {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    font-size: 14px;
}
.button1 {
    display:inline-flex ;
    width: 285px;
    height: 50px;
    position: absolute;
    top: 1000px;
    left: 1450px;
    padding: 0;
    background: #ffffff;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-weight: Bold;
    font-size: 25px;
    cursor: pointer;
}
.button1:hover {
    background: #bdcfcb;
}

.button1:active {
    background: #bdcfcb;
}

.button1__text,
.button1__icon {
    display: inline-flex;
    align-items: center;
    padding: 0 30px;
    color: rgb(0, 0, 0);
    height: 100%;
}

.button1__icon {
    font-size: 1.5em;
    background: rgba(0, 0, 0, 0.08);
}


.button2 {
    display:inline-flex ;
    width: 200px;
    height: 50px;
    position: absolute;
    top: 45px;
    left: 1460px;
    padding: 0;
    background: #ffffff;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-weight: Bold;
    font-size: 26px;
    cursor: pointer;
}
.button2:hover {
    background: #bdcfcb;
}

.button2:active {
    background: #bdcfcb;
}

.button2__text,
.button2__icon {
    display: inline-flex;
    align-items: center;
    padding: 0 19px;
    color: rgb(0, 0, 0);
    height: 100%;
}

.button2__icon {
    font-size: 1.5em;
    background: rgba(0, 0, 0, 0.08);
}

.background {
    background: rgba(21, 38, 70, 1);
    height: 1080px;
    width: 1920px;
    position: absolute;
    right: 800px;
    top: 0px;
    left: 0px;
}

.background2 {
    width: 100%;
    height: 827px;
    width: 1700px;
    background: rgba(26, 77, 123, 1);
    opacity: 1;
    position: absolute;
    top: 145px;
    left: 114px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
}

.MondayBox {
    width: 254px;
    height: 720px;
    background: rgba(217, 217, 217, 1);
    opacity: 1;
    position: absolute;
    top: 215px;
    left: 245px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    overflow: hidden;
}
.TuesdayBox {
    width: 255px;
    height: 720px;
    background: rgba(217, 217, 217, 1);
    opacity: 1;
    position: absolute;
    top: 215px;
    left: 540px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
}
.WednesdayBox {
    width: 260px;
    height: 720px;
    background: rgba(217, 217, 217, 1);
    opacity: 1;
    position: absolute;
    top: 215px;
    left: 840px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
}
.ThursdayBox {
    width: 260px;
    height: 720px;
    background: rgba(217, 217, 217, 1);
    opacity: 1;
    position: absolute;
    top: 215px;
    left: 1136px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    overflow: hidden;
}

.FridayBox {
    width: 260px;
    height: 720px;
    background: rgba(217, 217, 217, 1);
    opacity: 1;
    position: absolute;
    top: 215px;
    left: 1432px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
}

.v1_17 {
    width: 85px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 870px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.v1_16 {
    width: 85px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 800px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.v1_15 {
    width: 85px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 730px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}
.v1_14 {
    width: 86px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 660px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.v1_13 {
    width: 85px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 590px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}
.v1_12 {
    width: 84px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 520px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.v1_11 {
    width: 80px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 450px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.v1_10 {
    width: 86px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 370px;
    left: 138px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}
.v1_9 {
    width: 71px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 300px;
    left: 142px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.twelcome {
    width: 538px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 49px;
    left: 132px;
    font-weight: Bold;
    font-size: 50px;
    opacity: 1;
    text-align: left;
}
.box1 {
    width: 235px;
    height: 58px;
    background: rgba(168, 9, 9, 1);
    opacity: 1;
    position: absolute;
    top: 290px;
    left: 255px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
}

.box2 {
    width: 235px;
    height: 58px;
    background: rgba(168, 9, 9, 1);
    opacity: 1;
    position: absolute;
    top: 375px;
    left: 253px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
}

.box3 {
    width: 235px;
    height: 58px;
    background: rgba(168, 9, 9, 1);
    opacity: 1;
    position: absolute;
    top: 450px;
    left: 255px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
}

.box4 {
    width: 235px;
    height: 58px;
    background: rgba(168, 9, 9, 1);
    opacity: 1;
    position: absolute;
    top: 525px;
    left: 255px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: hidden;
}


.MonText {
    width: 160px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 228px;
    left: 293px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}


.TueText {
    width: 160px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 228px;
    left: 584px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}


.WedText {
    width: 160px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 228px;
    left: 854px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.ThurText {
    width: 160px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 228px;
    left: 1172px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}
.FriText {
    width: 160px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 228px;
    left: 1501px;
    font-weight: Bold;
    font-size: 30px;
    opacity: 1;
    text-align: left;
}

.module1 {
    width: 210px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 297px;
    left: 268px;
    font-weight: Bold;
    font-size: 15px;
    opacity: 1;
    text-align: left;
}

.Room1 {
    width: 56px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 320px;
    left: 268px;
    font-weight: Bold;
    font-size: 15px;
    opacity: 1;
    text-align: left;
}
</style>
