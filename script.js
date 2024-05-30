"use strict";
const headerCTA = document.querySelector('.header-interaction__cta')
const inputHeader = document.querySelector('.header-interaction__input')
const errorHeader = document.querySelector(".header-interaction__error")
const newsLetterCTA = document.querySelector('.newsletter-interaction__cta')
const errorNewsletter = document.querySelector(".newsletter-interaction__error")
const inputNewsletter = document.querySelector('.newsletter-interaction__email-place')
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const launchError = (input, error) =>{
    input.classList.toggle('show-error');
    error.classList.toggle('change-input-color');
}
headerCTA.addEventListener('click', e =>{
    e.preventDefault();
    if(!regex.test(inputHeader.value)){

        launchError(errorHeader, inputHeader) 
    }
})
newsLetterCTA.addEventListener('click', e=>{
    e.preventDefault();
    if(!regex.test(inputNewsletter.value)){
        launchError(errorNewsletter, inputNewsletter) 
    }
})