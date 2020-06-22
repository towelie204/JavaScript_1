/*const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        mouseClick(event);
    });
});*/

const buttons = document.querySelectorAll('button');

for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', function(event) {
        clickHandler(event)
    });
}

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function clickHandler(buttonClickEvent) {
    const productCard = buttonClickEvent.target.parentNode;
    const card = {
        wrap: productCard,
        productName: productCard.querySelector('h4'),
        image: productCard.querySelector('img'),
        button: productCard.querySelector('button'),
    };

    const buttonText = button.innerText;
    if (card.image.style.display !== 'none') {
        showDescription(card);
    } else {
        hideDescription(card);
    }
}

function showDescription(card) {
    card.image.style.display = 'none';
    const description = 'описание товара либо картинки с котом на траве';
    card.productName.insertAdjacentHTML('afterend', `<div class='addedDiv'>${description}<.div>`);
    card.button.innerText = 'Отмена';
}

function hideDescription(card) {
    card.image.style.display = 'block';
    card.wrap.querySelector('.addedDiv').remove();
    card.button.innerText = 'Подробнее';
}