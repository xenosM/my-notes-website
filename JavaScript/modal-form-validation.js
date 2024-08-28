const siginForm = document.querySelector('.signin-form')
const signinName = document.querySelector('#signin-name') 
const signinEmail = document.querySelector('#signin-email') 
const signinPassword = document.querySelector('#signin-password') 
const signinConform= document.querySelector('#signin-conform') 





siginForm.onsubmit = (e)=>{
    e.preventDefault();
}