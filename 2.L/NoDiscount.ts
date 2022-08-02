import {InterfaceDiscount} from './InterfaceDiscount';

export class NoDiscount implements InterfaceDiscount{

    /**
     *  A method implements from interface
     */
    apply(price : number) : number {
        //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
        return price;
    }

    /**
     *
     * @param price
     */
    showCalculation(price : number) : string {
        return "No discount";
    }
}