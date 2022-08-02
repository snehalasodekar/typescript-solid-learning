"use strict";
exports.__esModule = true;
exports.GoogleBot = void 0;
var GoogleBot = /** @class */ (function () {
    function GoogleBot() {
    }
    GoogleBot.prototype.checkGoogleLogin = function (token) {
        // return "this will not work";
        return (token === this._googleToken);
    };
    GoogleBot.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    return GoogleBot;
}());
exports.GoogleBot = GoogleBot;
