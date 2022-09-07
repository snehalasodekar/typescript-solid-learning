"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VariableDiscount_1 = require("./VariableDiscount");
const FixedDiscount_1 = require("./FixedDiscount");
const NoDiscount_1 = require("./NoDiscount");
/**
 * Product class with product information and discount
 */
class Product {
    constructor(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    get name() {
        return this._name;
    }
    get discount() {
        return this._discount;
    }
    get originalPrice() {
        return this._price;
    }
    calculatePrice() {
        return this._discount.apply(this._price);
    }
    showCalculation() {
        return this._discount.showCalculation(this._price);
    }
}
/**
 * shoppingBasket class with product collection
 */
class shoppingBasket {
    constructor() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    get products() {
        return this._products;
    }
    addProduct(product) {
        this._products.push(product);
    }
}
/**
 * create cart object and add multiple products to cart to check discount
 */
let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount_1.FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount_1.VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount_1.NoDiscount()));
/**
 * Show shopping cart items in tabular format
 */
const tableElement = document.querySelector('#cart tbody');
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
