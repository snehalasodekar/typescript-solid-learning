"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDiscount = void 0;
class NoDiscount {
    /**
     *  A method implements from interface
     */
    apply(price) {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        return price;
    }
    /**
     *
     * @param price
     */
    showCalculation(price) {
        return "No discount";
    }
}
exports.NoDiscount = NoDiscount;
