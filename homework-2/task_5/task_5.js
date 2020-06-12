'use strict';

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            return addition(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case'/':
            return division(arg1, arg2);
    }
}

console.log(mathOperation(10, 8, '+'));
console.log(mathOperation(9, 7, '-'));
console.log(mathOperation(2, 7, '*'));
console.log(mathOperation(20, 5, '/'));