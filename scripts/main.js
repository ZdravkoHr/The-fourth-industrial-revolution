const header = document.querySelector('header');
const nav = document.querySelector('header nav');

function controlNav(e) {
    const top = document.documentElement.scrollTop;
    top >= header.offsetHeight - nav.offsetHeight ?
                nav.classList.add('active') :
                nav.classList.remove('active');
}

window.addEventListener('scroll', controlNav);