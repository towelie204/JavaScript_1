'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - this.price / 100 * 25;
    }
}

let product1 = new Product('some stuff', 100);
let product2 = new Product('some else stuff', 1000);

console.log(product1);
console.log(product2);

product1.make25PercentDiscount();
console.log(product1);

product2.make25PercentDiscount();
console.log(product2);