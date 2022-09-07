"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./Admin");
const User_1 = require("./User");
const GoogleBot_1 = require("./GoogleBot");
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User_1.User;
let admin = new Admin_1.Admin;
let bot = new GoogleBot_1.GoogleBot;
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //let user = loginAsAdminElement.checked ? admin : guest;
    let auth = false;
    /* if (user == guest) {
         user.setGoogleToken('secret_token_google');
         user.setFacebookToken('secret_token_fb');
         switch (true) {
             case typePasswordElement.checked:
                 auth = user.checkPassword(passwordElement.value);
                 break;
             case typeGoogleElement.checked:
                 auth = user.checkGoogleLogin('secret_token_google');
                 auth = bot.checkGoogleLogin('secret_token_google');
                 break;
             case typeFacebookElement.checked:
                 auth = user.getFacebookLogin('secret_token_fb');
                 break;
         }
     } else if(user == admin){
             //if (!typeGoogleElement.checked && !typeFacebookElement.checked) {
         if(loginAsAdminElement.checked && typePasswordElement.checked){
                 auth = user.checkPassword(passwordElement.value);
             }
         }*/
    if (!loginAsAdminElement.checked && typePasswordElement.checked) {
        guest.setGoogleToken('secret_token_google');
        guest.setFacebookToken('secret_token_fb');
        auth = guest.checkPassword(passwordElement.value);
    }
    else if (!loginAsAdminElement.checked && typeGoogleElement.checked) {
        auth = guest.checkGoogleLogin('secret_token_google');
        auth = bot.checkGoogleLogin('secret_token_google');
    }
    else if (!loginAsAdminElement.checked && typeFacebookElement.checked) {
        auth = guest.checkGoogleLogin('secret_token_google');
    }
    else if (loginAsAdminElement.checked && typePasswordElement.checked) {
        auth = admin.checkPassword(passwordElement.value);
    }
    debugger;
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
