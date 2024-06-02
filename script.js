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
const regexpCheck = (emailPlace) =>{
    if(!regex.test(emailPlace.value)){
        const launchError = (input, error) =>{
            input.classList.toggle('show-error');
            error.classList.toggle('change-input-color');
        }
        return launchError;
    }
}
headerCTA.addEventListener('click', e =>{
    e.preventDefault();
    if(regexpCheck(inputHeader)){
        launchError(errorHeader, inputHeader) 
    }
})
newsLetterCTA.addEventListener('click', e =>{
    e.preventDefault();
    if(regexpCheck(inputNewsletter)){
        launchError(errorNewsletter, inputNewsletter) 
    }
})