"use strict";
const headerInput = document.querySelector(".header-interaction__input");
const newsLetterInput = document.querySelector(".newsletter-interaction__email-place");
const headerCTA = document.querySelector('.header-interaction__cta')
const newsLetterCTA = document.querySelector('.newsletter-interaction__cta')
const errorHeader = document.querySelector(".header-interaction__error")
const errorNewsletter = document.querySelector(".newsletter-interaction__error")
const inputHeader = document.querySelector('.header-interaction__input')
const inputNewsletter = document.querySelector('.newsletter-interaction__email-place')
console.log(headerInput, newsLetterInput, headerCTA, newsLetterCTA, errorHeader, errorNewsletter);
const launchError = (input, error) =>{
    input.classList.toggle('show-error');
    error.classList.toggle('change-input-color')
}
headerCTA.addEventListener('click', e =>{
    e.preventDefault();
    launchError(errorHeader, inputHeader)
})
newsLetterCTA.addEventListener('click', e=>{
    e.preventDefault();
    launchError(errorNewsletter, inputNewsletter)
})