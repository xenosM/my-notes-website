let headerBtn = document.querySelectorAll('.header-btn');
let modalOutsideContainer= document.querySelector('.modal-outside-container')
let modalClose = document.querySelectorAll('.modal-close')
let signinModalContainer = document.querySelector('.signin-modal-container')
let loginModalContainer = document.querySelector('.login-modal-container')

headerBtn.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',(e)=>{
        modalOutsideContainer.classList.add('show-modal')
        console.log(e.target.id);
        e.target.id == 'signin-btn'?  signinModalContainer.classList.add('show-modal-container') :loginModalContainer.classList.add('show-modal-container')
        document.body.classList.add('no-scroll')
    })

})

modalClose.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        modalOutsideContainer.classList.remove('show-modal')
        signinModalContainer.classList.remove('show-modal-container')
        loginModalContainer.classList.remove('show-modal-container')
        document.body.classList.remove('no-scroll')
    })

})