const icons = [...document.querySelectorAll('section.revolutions .revolution-img')];

function activateIcon() {
    deactivateIcons();
    const nextIcon = icons[icons.indexOf(this) + 1];
    this.classList.add('active');
    nextIcon ? nextIcon.classList.add('active-next-before', 'active-next-after') : '';
    
}

function deactivateIcons() {
    icons.forEach(icon => icon.classList.remove('active', 'active-next-before', 'active-next-after'));
}

icons
    .forEach(icon => {
        icon.addEventListener('mouseover', activateIcon);
    });

