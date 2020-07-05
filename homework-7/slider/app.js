'use strict';

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const loadIcon = document.querySelector('.loading');

window.addEventListener('load', function () {
    loadIcon.style.display = 'none';
    images.init();

    rightArrow.addEventListener('click', function() {
        images.showNextImage();
    });
    
    leftArrow.addEventListener('click', function() {
        images.showPreviousImage();
    });
});

let images = {
    currentIdx: 0,
    previousIdx: Number,
    slides: [],
    init() {
        this.slides = document.querySelectorAll('.slider__item');
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden');
    },

    hideImage() {
        document
            .querySelector('.slider__item:not(.hidden)')
            .classList
            .add('hidden');
    },

    showPreviousImage() {
        //this.hideImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-rightToLeftAnimation');
        currentSlide.classList.remove('hidden');
        setTimeout( () => {
            currentSlide.classList.remove('slider-rightToLeftAnimation');
        }, 500);

        
        if (this.currentIdx == this.slides.length - 1) {
            this.previousIdx = 0;
        } else {
            this.previousIdx = this.currentIdx + 1;
        }
        const previousSlide = this.slides[this.previousIdx];
        previousSlide.classList.add('slider-toLeftAnimation');
        setTimeout( () => {
            previousSlide.classList.remove('slider-toLeftAnimation');
            previousSlide.classList.add('hidden');
        }, 500); 
    },

    showNextImage() {
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.add('slider-leftToRightAnimation');
        currentSlide.classList.remove('hidden');
        setTimeout( () => {
            currentSlide.classList.remove('slider-leftToRightAnimation');
        }, 500);

        if (this.currentIdx == 0) {
            this.previousIdx = this.slides.length - 1;
        } else {
            this.previousIdx = this.currentIdx - 1;
        }
        const previousSlide = this.slides[this.previousIdx];
        previousSlide.classList.add('slider-toRightAnimation');
        setTimeout( () => {
            previousSlide.classList.remove('slider-toRightAnimation');
            previousSlide.classList.add('hidden');
        }, 500);
    },
};

