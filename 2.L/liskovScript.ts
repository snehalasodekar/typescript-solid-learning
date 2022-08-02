import {VariableDiscount} from "./VariableDiscount";
import {FixedDiscount} from "./FixedDiscount";
import {NoDiscount} from "./NoDiscount";
import {InterfaceDiscount} from "./InterfaceDiscount";

/**
 * Product class with product information and discount
 */

class Product {
    private _name : string;
    private _price : number;
    private _discount : InterfaceDiscount;

    constructor(name: string, price: number, discount: InterfaceDiscount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): InterfaceDiscount {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    calculatePrice() : number {
        return this._discount.apply(this._price);
    }

    showCalculation() : string {
        return this._discount.showCalculation(this._price);
    }
}

/**
 * shoppingBasket class with product collection
 */

class shoppingBasket {
    //this array only accepts Product objects, nothing else
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product) {
        this._products.push(product);
    }
}

/**
 * create cart object and add multiple products to cart to check discount
 */
let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount( 10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount( 25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));


/**
 * Show shopping cart items in tabular format
 */
const tableElement = <HTMLTableElement>document.querySelector('#cart tbody');
//const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});