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
        this.hideImage();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();
    },

    showNextImage() {
        this.hideImage();
        if (this.currentIdx == this.currentIdx - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },

    


};

