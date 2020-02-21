function center(element) {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const elementHeight = element.offsetHeight;
    const elementWidth = element.offsetWidth;
    //center vertically
    element.style.marginTop = (screenHeight - elementHeight) / 2 + 'px';
    element.style.marginLeft = (screenWidth - elementWidth) / 2 + 'px';
}
