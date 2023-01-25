<template>
    <head>
        <title>Sign Up</title>
        <link rel="stylesheet" href="style.css"> 
    </head>
        <body>
        <div class="split left"></div>
        <div class="split right"></div>
        <div class="loginimg"> <img src= https://cdn-icons-png.flaticon.com/512/277/277991.png>
        <div class="WebsiteName">WeeklyPlanner</div>
        </div>
        <div class="text">Your Timetable,
            <div class="text2">Made easy</div>
            </div>
        
        <div class="center">
            <h1>Sign Up</h1>
            <form>
              <div class="txt_field">
                <input type="email" v-model="email">
                <span></span>
                <label>Your Email</label>
              </div>
              <div class="txt_field">
                <input type="password" v-model="password">
                <span></span>
                <label>Choose a Password</label>
              </div>
              <div class="pass">Forgot Password?</div>
              <input id="test1" @click="reg" value="Sign up">
              <div class="signup_link">
                Already have an account? <a href="#">Sign in</a>
              </div>
            </form>
          </div>
          </body>
    </template>
    
    <script setup>
    import { ref } from "vue";
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
    const email = ref("");
    const password = ref("");
    
    const reg = () => {
        console.log("register called");
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            console.log("Registered!");
            // router.push('/login') // redirect to login page (will be replaced with home page when available)
        })
        .catch((error) => {
            console.log("Error: " + error.code);
            alert(error.message);
        });
    };
    
    
    </script>
    
    <style scoped>
    
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap');
    
    .split {
        height: 100%;
        position: absolute;
      }
    
      .left {
        left: 0;
        position: absolute;
        bottom: 0;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1040%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%231e3266'%3e%3c/rect%3e%3cpath d='M1464 560L0 560 L0 429.76Q45.06 354.82%2c 120 399.88Q200.03 359.91%2c 240 439.95Q263.96 391.91%2c 312 415.87Q362.31 346.18%2c 432 396.49Q484.64 377.13%2c 504 429.78Q546.51 400.29%2c 576 442.81Q614.69 361.5%2c 696 400.2Q769.32 353.51%2c 816 426.83Q860.2 399.03%2c 888 443.23Q929.55 364.78%2c 1008 406.34Q1075.29 353.63%2c 1128 420.92Q1200.35 373.26%2c 1248 445.61Q1264.38 389.99%2c 1320 406.37Q1362.39 376.76%2c 1392 419.16Q1437.18 392.35%2c 1464 437.53z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M1560 560L0 560 L0 491.23Q39.69 410.92%2c 120 450.61Q148.33 406.94%2c 192 435.27Q277.02 400.29%2c 312 485.32Q363.92 417.24%2c 432 469.16Q481.48 398.64%2c 552 448.13Q628.57 404.69%2c 672 481.26Q696.69 433.95%2c 744 458.65Q774.53 417.19%2c 816 447.72Q889.86 401.58%2c 936 475.44Q975.64 395.08%2c 1056 434.72Q1142.73 401.45%2c 1176 488.18Q1220.98 413.16%2c 1296 458.15Q1326.71 416.86%2c 1368 447.57Q1419.55 427.12%2c 1440 478.67Q1493.59 412.26%2c 1560 465.85z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 515.98Q42.2 438.19%2c 120 480.39Q190.87 431.25%2c 240 502.12Q306.14 448.26%2c 360 514.41Q402.13 484.53%2c 432 526.66Q470 444.66%2c 552 482.67Q623.5 434.17%2c 672 505.66Q726.99 440.65%2c 792 495.65Q842.58 474.22%2c 864 524.8Q893.94 482.74%2c 936 512.68Q984.3 440.98%2c 1056 489.28Q1134.61 447.88%2c 1176 526.49Q1224.61 455.1%2c 1296 503.71Q1325.14 460.85%2c 1368 489.99Q1421.68 423.68%2c 1488 477.36z' fill='%23356cb1'%3e%3c/path%3e%3cpath d='M1488 560L0 560 L0 553.44Q33.09 514.53%2c 72 547.62Q100.86 504.48%2c 144 533.34Q219.09 488.43%2c 264 563.52Q315.93 495.45%2c 384 547.39Q405.87 497.26%2c 456 519.13Q497.61 488.74%2c 528 530.34Q586.42 516.76%2c 600 575.18Q608.37 511.55%2c 672 519.92Q715.29 491.21%2c 744 534.5Q815.99 486.49%2c 864 558.48Q894.43 516.91%2c 936 547.35Q987.75 479.1%2c 1056 530.84Q1112.56 515.4%2c 1128 571.96Q1180.42 504.38%2c 1248 556.8Q1289.49 478.28%2c 1368 519.77Q1435.38 467.15%2c 1488 534.53z' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1040'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
        width: 100%;
        box-shadow: 2px 0px 5px 0px rgba(23,2,32,1);
        z-index: 0;
      }
    
      .right {
        right: 0;
        background-color: #ffffffeb;
        width: 60%;
        z-index: -2;
      }
    
      .loginimg {
        z-index: 3;
        position: relative; 
        top:15px;
        left: 25px;
        height: 70px;
        width: 70px;
      }
    
      .loginimg img {
        height: 100%;
        width: 100%;  
     }
    
     .WebsiteName {
      font-size: 30px;
      color: white;
      position: relative;
      left: 80px;
      top: -50px;
     }
    
     .text {
      z-index: 3;
      font-size: 30px;
      color: white;
      position: relative;
      left: 140px;
      top: 150px;
      font-weight: bold;
     }
    
     .text2 {
      z-index: 3;
      font-size: 42px;
      color: white;
      left: 140px;
      top: 190px;
      font-weight: bold;
     }
    
    
     *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
    
    body{
      margin: 0;
      padding: 0;
      background: rgba(24, 47, 93, 1);
      height: 100vh;
      overflow: hidden;
    }
    
    .center{
      position: absolute;
      top: 50%;
      left: 70%;
      transform: translate(-50%, -50%);
      width: 400px;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 0px 5px 0px rgba(23,2,32,1);
    }
    
    .center h1{
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid silver;
    }
    
    .center form{
      padding: 0 40px;
      box-sizing: border-box;
    }
    
    form .txt_field{
      position: relative;
      border-bottom: 2px solid #adadad;
      margin: 30px 0;
    }
    
    .txt_field input{
      width: 100%;
      padding: 0 5px;
      height: 40px;
      font-size: 16px;
      border: none;
      background: none;
      outline: none;
    }
    
    .txt_field label{
      position: absolute;
      top: 50%;
      left: 5px;
      color: #adadad;
      transform: translateY(-50%);
      font-size: 16px;
      pointer-events: none;
      transition: .5s;
    }
    
    .txt_field span::before{
      content: '';
      position: absolute;
      top: 40px;
      left: 0;
      width: 0%;
      height: 2px;
      background: rgba(24, 47, 93, 1);
      transition: .5s;
    }
    
    .txt_field input:focus ~ label,
    .txt_field input:valid ~ label{
      top: -5px;
      color: rgba(24, 47, 93, 1);
    }
    .txt_field input:focus ~ span::before,
    .txt_field input:valid ~ span::before{
      width: 100%;
    }
    
    .pass{
      margin: -5px 0 20px 5px;
      color: #a6a6a6;
      cursor: pointer;
    }
    
    .pass:hover{
      text-decoration: underline;
    }
    
    
    #test1 {
      width: 100%;
      height: 50px;
      border: 1px solid;
      background: rgba(24, 47, 93, 1);
      border-radius: 25px;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;
      text-align: center;
    }
    
    #test1:hover{
      border-color: rgba(24, 47, 93, 1);
      transition: .5s;
    }
    
    .signup_link{
      margin: 30px 0;
      text-align: center;
      font-size: 16px;
      color: #666666;
    }
    
    .signup_link a{
      color: rgba(24, 47, 93, 1);
      text-decoration: none;
    }
    
    .signup_link a:hover{
      text-decoration: underline;
    }
    </style>