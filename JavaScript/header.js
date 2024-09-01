

function animateDropdownElement(){
    let headerDropdown = document.querySelectorAll('.header-dropdown')
    headerDropdown.forEach((dropdown)=>{
        let dropdownList = dropdown.querySelector('.dropdown-list')
        let dropdownListElement = dropdown.querySelectorAll('.dropdown-list-element')
        dropdownListElement.forEach((element)=>{
            element.addEventListener('mouseover',()=>{
                element.style.setProperty('--animate-underline','animate-underline .5s forwards')
            });
            element.addEventListener('mouseleave',()=>{
                element.style.setProperty('--animate-underline','none')
            })
        })
    })
}
function closeActiveDropdown(activeDropdown){
        activeDropdown.classList.remove('toggle-display')
}
function showDropdown(){
    let headerListElement = document.querySelectorAll('.header-list-element');
    let record={target:null};
    headerListElement.forEach((element)=>{
        let headerListText = element.querySelector('.header-list-text')
        const dropdown = element.querySelector('.header-dropdown') 

        
        headerListText.addEventListener('click',(event)=>{
            let activatedDropdown =document.querySelector('.header-list-element .header-dropdown.toggle-display')
            // prevents two dropdown menu from appearing
            if(activatedDropdown){
                closeActiveDropdown( activatedDropdown)
                // if clicked element is a different element then show dropdown
                if( !(record.target == event.target)){
                    dropdown.classList.toggle('toggle-display')
                    record = event
                }
                else{
                    record={target:null}
                }
            }
            
            // displays dropdown menu
            else {
               dropdown.classList.toggle('toggle-display')
               record = event
            }
        })
    })
}
function  toggleNavBtn(){
    let navBtn = document.querySelector('.header-nav-toggle')
    let mobileDropdown = document.querySelectorAll('.header-mobile-dropdown')
    navBtn.addEventListener('click',()=>{
        navBtn.classList.toggle('active')
        mobileDropdown.forEach((element)=>{
            element.classList.toggle('toggle-mobile-dropdown')
        })
    })
}

// CODE
animateDropdownElement()
showDropdown()  
toggleNavBtn()