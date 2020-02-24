const header = document.querySelector('header');
const nav = document.querySelector('header nav');
function center(element) {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const elementHeight = element.offsetHeight;
    const elementWidth = element.offsetWidth;
    console.log(screenHeight, elementHeight);
    //center vertically
    element.style.marginTop = (screenHeight - elementHeight) / 2 + 'px';
    //center horizontally
    element.style.marginLeft = (screenWidth - elementWidth) / 2 + 'px';
}

function controlNav(e) {
    const top = document.documentElement.scrollTop;
    top >= header.offsetHeight - nav.offsetHeight ?
                nav.classList.add('active') :
                nav.classList.remove('active');
}

window.addEventListener('scroll', controlNav);