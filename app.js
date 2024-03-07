let MainSec = document.querySelector('.Main-1')
let MenuBTN = document.querySelector('.btnmenu')
let Menu = document.querySelector('.Navbar-5')
let X = document.querySelector('.x')
let MainIMG = document.querySelector('.Main-2')


MenuBTN.addEventListener('click' ,  () => {
    Menu.style.width = 70 + '%'
    MainSec.style.filter = 'blur(' + 2 +'px)'
    MainIMG.style.filter = 'blur(' + 2 +'px)'
    X.style.display = 'block'
    MenuBTN.style.opacity = 0;
})


X.addEventListener('click' , () => {
    Menu.style.width = 0 
    MainSec.style.filter = 'blur(' + 0 +'px)'
    MainIMG.style.filter = 'blur(' + 0 +'px)'
    X.style.display = 'none'
    MenuBTN.style.display = 'block'
    MenuBTN.style.opacity = 1;
})
