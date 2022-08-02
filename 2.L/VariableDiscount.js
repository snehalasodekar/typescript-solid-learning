"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDiscount = void 0;
class VariableDiscount {
    constructor(value) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a  discount with a negative value');
        }
    }
    /**
     *  A method implements from interface
     */
    apply(price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        return Math.max(0, price - this._value);
    }
    /**
     *
     * @param price
     */
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}
exports.VariableDiscount = VariableDiscount;
