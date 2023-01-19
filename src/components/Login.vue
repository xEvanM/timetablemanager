<template>
<div class="base">
<div class="login-container">
        <form>
            <h1>Login</h1>
            <div class="form-row">
                <input type="email" id="emailInput" class="form-input" placeholder="example@email.com">
                <label for="emailInput" class="form-label">Email</label>
            </div>
            <div class="form-row">
                <input type="password" id="passwordInput" class="form-input" placeholder="pwd">
                <label for="passwordInput" class="form-label">Password</label>
            </div>
            <a href="#" class="forgot-pwd">forgot password?</a>

            <button type="submit" class="submit-btn">Login</button>
        </form>
        <p class="sign-up-text">Don't have an account? <a href="#"> Sign Up</a></p>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


.login-container {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 2rem;
    text-align: center;
    border-radius: 1rem;
    background: white;
    width: 35%;
    display: block;
    margin: auto;
}

h1{
    margin-top: 0;
    color: black;
}

.form-row {
    position: relative;
    margin-bottom: 0.5rem;
}

.form-input {
    box-sizing: border-box;
    padding:2rem 1rem 0.5rem 0.5rem;
    border: 0;
    border-bottom: 1px solid lightgrey;
    width: 100%;
}

.form-input::placeholder {
    color: transparent;
    display: none;
}

.form-input:focus {
    outline: none;
    border-bottom: 2px solid #19c7d9;
}

.form-label {
    position: absolute;
    color: gray;
    bottom: 0.5rem;
    left: 0;
    transition: opacity .1s ease-in-out, transform .1s ease-in-out;
}

.form-input:focus~.form-label, .form-input:not(:placeholder-shown)~.form-label {
    opacity: .65;
    transform: scale(.85) translateY(-1.3rem);
}

.forgot-pwd{
    float: right;
    text-decoration: none;
    color: #19c7d9;
    margin-top: 1rem;
}

.submit-btn {
    margin-top: 2rem;
    width: 100%;
    font-size: 1.2rem;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    background: #19c7d9;
    color: white;
    border: 0;
}

.submit-btn:hover {
    cursor: pointer;
    background: #0ed8ee;
    text-decoration: none;
}

.sign-up-text{
    color: gray;
    display: block;
    margin-top: 2rem;
}

.sign-up-text >a {
    text-decoration: none;
    color: #19c7d9;
}

</style>