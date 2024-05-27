"use strict";
const headerInput = document.querySelector(".header-interaction__input");
const newsLetterInput = document.querySelector(".newsletter-interaction__email-place");
const headerCTA = document.querySelector('.header-interaction__cta')
const newsLetterCTA = document.querySelector('.newsletter-interaction__cta')
console.log(headerInput, newsLetterInput, headerCTA, newsLetterCTA);
headerCTA.addEventListener('click', e =>{
    e.preventDefault();
    console.log("elo");
})