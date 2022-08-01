"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const radio_1 = require("./radio");
const Engine_1 = require("./Engine");
class Car {
    constructor() {
        //it is convention to start property names in TypeScript with an underscore.
        // If you want to known why, remove the underscore and see if your compiler is throwing you an error!
        this._miles = 0;
        //By changing this variable to readonly I have in essence created a property constant.
        // the only subtle difference is that you can write once to the variable inside the constructor
        this.FUEL_MILEAGE = 10;
        this._Radio = new radio_1.Radio();
        this._Engine = new Engine_1.Engine(100);
    }
    get miles() {
        return this._miles;
    }
    //Take attention to these getter and setters
    get radio() {
        return this._Radio;
    }
    get engine() {
        return this._Engine;
    }
    drive() {
        if (this._Engine.status === false || this._Engine.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._Engine.handleFuel();
        this._miles += this.FUEL_MILEAGE;
    }
}
exports.Car = Car;
