const siginForm = document.querySelector('.signin-form')
const loginForm = document.querySelector('.login-form')
const signinName = document.querySelector('#signin-name') 
const signinEmail = document.querySelector('#signin-email') 
const signinPassword = document.querySelector('#signin-password') 
const signinConform= document.querySelector('#signin-conform') 
const loginName = document.querySelector('#login-name')
const loginPassword = document.querySelector('#login-password')

siginForm.onsubmit = (e)=>{
    e.preventDefault();
    if(validateForm()){
        alert('signin successful')
        clearInput()
    }
    
}
loginForm.onsubmit = (e)=>{
    e.preventDefault();
    if(validateForm(true)){
        alert('login successful')
        clearInput()
    }
    
}


function validateForm(isLoginForm){
    let dataArray=[]
    isLoginForm?   dataArray = [loginName,loginPassword] :  dataArray = [signinName,signinEmail,signinPassword,signinConform]
    let isValid = true

    dataArray.forEach((data)=>{
        if(!data.value.trim()){
            showTooltip(`#tooltip-${data.id}`,'This field is required')
            isValid = false;
        }
    })
    if(isLoginForm){
        return isValid
    }
    if(isValid && signinPassword.value !=signinConform.value){
        showTooltip('.password-auth','Passwords doesn\'t match')
        isValid = false;
    }
    return isValid
}

function showTooltip(selector,message){
    console.log(selector);
    let tooltip =document.querySelectorAll(selector)
    tooltip.forEach((element)=>{
        element.innerText = message
        element.classList.add('show')
        setTimeout(()=>{
            element.classList.remove('show')
        },4000)
    })
}

function clearInput(){
    document.querySelectorAll('.signin-input').forEach((element)=>{
        element.value=""
    })
    document.querySelectorAll('.login-input').forEach((element)=>{
        element.value=""
    })
}