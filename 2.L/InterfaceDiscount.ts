/**
 * refactor discount class from old.js to separate 3 classes
 */
export interface InterfaceDiscount{

    apply: (price : number) => number;
    showCalculation: (price : number) => string;
}