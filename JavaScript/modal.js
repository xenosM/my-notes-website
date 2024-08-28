let signinBtn = document.querySelector('.header-signin-btn');
let modalOutsideContainer= document.querySelector('.modal-outside-container')
let modalClose = document.querySelector('.modal-close')
let signinModalContainer = document.querySelector('.signin-modal-container')

signinBtn.addEventListener('click',()=>{
    modalOutsideContainer.classList.add('show-modal')
    signinModalContainer.classList.add('show-modal-container')
    document.body.classList.add('no-scroll')
})

modalClose.addEventListener('click',()=>{
    modalOutsideContainer.classList.remove('show-modal')
    signinModalContainer.classList.remove('show-modal-container')
    document.body.classList.remove('no-scroll')
})