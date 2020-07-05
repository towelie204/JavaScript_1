'use strict';

let basketWindow = document.querySelector('.basketWindow');
let basketButton = document.querySelector('.basketButton');
let buttonArrow = document.querySelector('.buttonArrow');

basketButton.addEventListener('click', function () {
    if (basketWindow.classList.contains('hidden')) {
        basketWindow.classList.remove('hidden');
        buttonArrow.classList.remove('fa-chevron-down');
        buttonArrow.classList.add('fa-chevron-up');
    } else {
        basketWindow.classList.add('hidden');
        buttonArrow.classList.add('fa-chevron-down');
        buttonArrow.classList.remove('fa-chevron-up');
    }
})

let addToBasketBtns = document.querySelectorAll('.addToBasketBtn');
addToBasketBtns.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let id = event.srcElement.dataset.id;
        let name = event.srcElement.dataset.name;
        let price = event.srcElement.dataset.price;
        basket.addProduct({
            id: id,
            name: name,
            price: price
        });
    });
});

let basket = {
        products: {},

        addProduct(product) {
            this.addProductToObject(product);
            this.renderProduct(product);
            this.renderSum();
            this.addRemoveButtonListener();
            //this.showBasketIsNotEmpty();
        },

        addProductToObject(product) {
            if (this.products[product.id] == undefined) {
                this.products[product.id] = {
                    price: product.price,
                    name: product.name,
                    count: 1
                }
            } else {
                this.products[product.id].count++;
            }
        },

        renderProduct(product) {
            let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
            if (productExist) {
                productExist.textContent++;
                return;
            }
            let productRow = `
        <tr>
            <th scope="row"${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="productCount" data-id="${product.id}">1</td>
            <td><i class="fa fa-trash-o productRemoveBtn" data-id="${product.id}"></i></td>
        </tr>
        `;
            let tbody = document.querySelector('tbody');
            tbody.insertAdjacentHTML("beforeend", productRow);
        },

        renderSum() {
            document.querySelector('.total').textContent = this.getSum();
        },

        getSum() {
            let sum = 0;
            for (let key in this.products) {
                sum += this.products[key].price * this.products[key].count;
            }
            return sum;
        },

        //пытался сделать, чтобы кнопка корзины была зеленая, когда в ней есть товар
        //но засыпаю за компьютером и уже ничего не соображаю, сделаю потом
        /*showBasketIsNotEmpty() {
            if (basketContent > 0) {
                basketButton.classList.add('basketIsNotEmpty');
            } else if (basketContent == 0) {
                    basketButton.classList.remove('basketIsNotEmpty');
                }
        },

        isBasketEmpty() {
            let basketContent = 0;
            for (let key in this.products) {
                basketContent += this.products[key].price * this.products[key].count;
            }
            return basketContent;  
        },*/

        removeProductListener() {
            basket.removeProduct(event);
            basket.renderSum();
        },

        addRemoveButtonListener() {
            let btns = document.querySelectorAll('.productRemoveBtn');
            for (let i = 0; i < btns.length; i++) {
                btns[i].addEventListener('click', this.removeProductListener);
            }
        },

        removeProduct(event) {
            let id = event.srcElement.dataset.id;
            this.removeProductFromObject(id);
            this.removeProductFromBasket(id);
            //this.showBasketIsNotEmpty();
        },

        removeProductFromBasket(id) {
            let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
            if (countTd.textContent == 1) {
                countTd.parentNode.remove();
            } else {
                countTd.textContent--;
            }
        },

        removeProductFromObject(id) {
            if (this.products[id].count == 1) {
                delete this.products[id];
            } else {
                this.products[id].count--;
            }
        },
    };