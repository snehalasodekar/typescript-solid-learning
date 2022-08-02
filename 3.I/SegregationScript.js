"use strict";
exports.__esModule = true;
var Admin_1 = require("./Admin");
var User_1 = require("./User");
var GoogleBot_1 = require("./GoogleBot");
var passwordElement = document.querySelector('#password');
var typePasswordElement = document.querySelector('#typePassword');
var typeGoogleElement = document.querySelector('#typeGoogle');
var typeFacebookElement = document.querySelector('#typeFacebook');
var loginAsAdminElement = document.querySelector('#loginAsAdmin');
var resetPasswordElement = document.querySelector('#resetPassword');
var guest = new User_1.User;
var admin = new Admin_1.Admin;
var bot = new GoogleBot_1.GoogleBot;
var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //let user = loginAsAdminElement.checked ? admin : guest;
    var auth = false;
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
resetPasswordElement.addEventListener('click', function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
