const hideIntro = () => {
    document.querySelector('.intro-background').classList.add('d-none');
}

function applyAnimation() {
    const introHeading = document.querySelector('.intro-heading');
    introHeading.classList.remove('not-animated');
   // setTimeout(hideIntro, 2500);
}

setTimeout(applyAnimation, 1000);
