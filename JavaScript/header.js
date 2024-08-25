

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
    if(activeDropdown){
        activeDropdown.classList.remove('toggle-display')
        activeDropdown.classList.remove('toggle-height')    
    }
}
function showDropdown(){
    let headerListElement = document.querySelectorAll('.header-list-element');
    let record={};
    headerListElement.forEach((element)=>{
        let headerListText = element.querySelector('.header-list-text')
        const dropdown = element.querySelector('.header-dropdown') 

        
        headerListText.addEventListener('click',(event)=>{
            let activatedDropdown =document.querySelector('.header-list-element .header-dropdown.toggle-display')
            console.log(activatedDropdown)
            console.log(record.target);
            console.log(event.target);
            console.log(record.target == event.target);
            // prevents two dropdown menu from appearing
            if(activatedDropdown){
                closeActiveDropdown( activatedDropdown)
            }
            
            // displays dropdown menu
            else {
               dropdown.classList.toggle('toggle-display')
               dropdown.classList.toggle('toggle-height')
            }
            console.log('------------------------------------------------');
        })
    })
}

// CODE
animateDropdownElement()
showDropdown()