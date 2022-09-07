"use strict";
class User {
    constructor() {
        this._password = 'user';
    }
    //Interesting detail here: while I did not define a return type or param type, any deviation from the interface will give you an error.
    // Test it out by uncommenting the code below.
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }
    setFacebookToken(token) {
        this._facebookToken = token;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
//admin cannot use google or facebook token
class Admin {
    constructor() {
        this._password = 'admin';
    }
    checkGoogleLogin(token) {
        return false;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    getFacebookLogin(token) {
        return false;
    }
    setFacebookToken() {
        throw new Error('Function not supported for admins');
    }
    setGoogleToken() {
        throw new Error('Function not supported for admins');
    }
    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
// class GoogleBot implements UserAuth {}
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User;
let admin = new Admin;
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    if (!loginAsAdminElement.checked) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    debugger;
    let auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }
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
