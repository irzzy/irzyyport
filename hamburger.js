// Navbar transparent

window.onscroll = function () {

    const header = document.querySelector('header')
    const Navfix = header.offsetTop

    if (window.pageYOffset > Navfix)  {

        header.classList.add('navbar-trans')
    }

    else {

        header.classList.remove('navbar-trans')
    }

}


// Hamburger menu

const menu = document.querySelector('#hamburger');
const navdow = document.querySelector('#Navwin')

menu.addEventListener ('click' , function () {

    menu.classList.toggle('hamburger-active');
    navdow.classList.toggle('hidden')
});