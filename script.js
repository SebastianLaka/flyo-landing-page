"use strict";
const headerInput = document.querySelector(".header-interaction__input");
const newsLetterInput = document.querySelector(".newsletter-interaction__email-place");
const headerCTA = document.querySelector('.header-interaction__cta')
const newsLetterCTA = document.querySelector('.newsletter-interaction__cta')
const errorHeader = document.querySelector(".header-interaction__error")
const errorNewsletter = document.querySelector(".newsletter-interaction__error")
console.log(headerInput, newsLetterInput, headerCTA, newsLetterCTA, errorHeader, errorNewsletter);
headerCTA.addEventListener('click', e =>{
    e.preventDefault();
    
})