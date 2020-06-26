'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - this.price / 100 * 25;
}

let product1 = new Product('some stuff', 100);
let product2 = new Product('some else stuff', 1000);

console.log(product1);
console.log(product2);

product1.make25PercentDiscount();
console.log(product1);

product2.make25PercentDiscount();
console.log(product2);
