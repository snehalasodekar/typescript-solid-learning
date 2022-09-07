"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
//admin cannot use google or facebook token
class Admin {
    constructor() {
        this._password = 'admin';
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    }
}
exports.Admin = Admin;
