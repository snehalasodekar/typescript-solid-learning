"use strict";
exports.__esModule = true;
exports.Admin = void 0;
//admin cannot use google or facebook token
var Admin = /** @class */ (function () {
    function Admin() {
        this._password = 'admin';
    }
    Admin.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    Admin.prototype.resetPassword = function () {
        // @ts-ignore
        this._password = prompt('What is your new password?');
    };
    return Admin;
}());
exports.Admin = Admin;
