"use strict";
const headerCTA = document.querySelector('.header-interaction__cta')
const newsLetterCTA = document.querySelector('.newsletter-interaction__cta')
const inputHeader = document.querySelector('.header-interaction__input')
const inputNewsletter = document.querySelector('.newsletter-interaction__email-place')
const errorHeader = document.querySelector(".header-interaction__error")
const errorNewsletter = document.querySelector(".newsletter-interaction__error")

const regexEmail = /\S+@\S+\.\S+/
const addError = (error, input) =>{
    error.classList.add('show-error');
    input.classList.add('change-input-color');
}
const removeError = (error, input) =>{
    error.classList.remove('show-error');
    input.classList.remove('change-input-color');
}
const checkHeaderValidation = () =>{
    if(!regexEmail.test(inputHeader.value)){
        addError(errorHeader, inputHeader)
    }else if(regexEmail.test(inputHeader.value)){
        removeError(errorHeader, inputHeader)
    }
}
const checkNewsletterValidation = () =>{
    if(!regexEmail.test(inputNewsletter.value)){
        addError(errorNewsletter, inputNewsletter)
    }else if(regexEmail.test(inputNewsletter.value)){
        removeError(errorNewsletter, inputNewsletter)
    }
}
headerCTA.addEventListener('click', checkHeaderValidation)
newsLetterCTA.addEventListener('click', checkNewsletterValidation)
