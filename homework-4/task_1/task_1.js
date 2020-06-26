'use stricrt';

/**
 * Функция преобразует число в объект и разбивает его на разряды
 * @param {int} num число в диапазоне [0.999]
 * @returns {object} объект, в котором в соответствующих свойствах описаны разряды числа
 */
function getObjectFromNumber (num) {
    if (num < 0 || num > 999 || isNaN(num) || !Number.isInteger(num)) {
        console.log('Значение ${num} должно быть целым числом в диапазоне от 0 до 999');
        return{};
    }

    return {
        units: num % 10,
        tens: Math.floor((num / 10) % 10),
        hundreds: Math.floor(num / 100),
    }
}

console.log(getObjectFromNumber(123));
console.log(getObjectFromNumber(0));
console.log(getObjectFromNumber(999));
console.log(getObjectFromNumber(88));
console.log(getObjectFromNumber(1000)); //пустой объект
console.log(getObjectFromNumber(-1)); //пустой объект
console.log(getObjectFromNumber('string')); //пустой объект
console.log(getObjectFromNumber(1.23)); //пустой объект