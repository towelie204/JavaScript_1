const mainButton = document.getElementById('mainButton');
const modWindow = document.querySelector('.modWindow');
const buttonYes = document.querySelector('.modWindow__button_yes'); 
const buttonNo = document.querySelector('.modWindow__button_no');
const right = document.querySelector('.right');
const notRight = document.querySelector('.notRight');

mainButton.addEventListener('click', function() {
    modWindow.classList.remove('animate__bounceOut');
    modWindow.classList.add('animate__bounceInLeft');
    modWindow.classList.remove('hidden');
    right.classList.add('hidden');
    notRight.classList.add('hidden');
});

function hideWindow () {
    modWindow.classList.add('hidden');
}

buttonYes.addEventListener('click', function() {
    setTimeout(hideWindow, 500);
    right.classList.remove('hidden');
    modWindow.classList.remove('animate__bounceInLeft');
    modWindow.classList.add('animate__bounceOut');
})

buttonNo.addEventListener('click', function() {
    setTimeout(hideWindow, 500);
    notRight.classList.remove('hidden');
    modWindow.classList.remove('animate__bounceInLeft');
    modWindow.classList.add('animate__bounceOut');
})