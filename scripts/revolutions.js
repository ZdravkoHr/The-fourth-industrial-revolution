{
const header = document.querySelector('header');
const section = document.querySelector('section.revolutions');
const canvas = document.querySelector('canvas.lines');
const c = canvas.getContext('2d');
const cols = [...document.querySelectorAll('section.revolutions .col')];
const icons = [...document.querySelectorAll('section.revolutions .col .revolution-img')];

canvas.width = section.offsetWidth;
canvas.height = section.offsetHeight;

class Line {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    draw() {
        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(this.x2, this.y2);
        c.stroke();
    }

}

let startX = 0;
let startY = 0;

cols.forEach(col => drawLines(col));

function activateIcon() {
    if (!this.classList.contains('active')) {
        deactivateIcons();
        const oldIcon = this;
        this.classList.add('active');
        redrawLines(this, oldIcon);
    }

}

function deactivateIcons() {
    icons.forEach(icon => icon.classList.remove('active'));
}

function redrawLines(icon, oldIcon) {
    startX = startY = 0;
    c.clearRect(0, 0, canvas.width, canvas.height);
    cols.forEach(col => drawLines(col, oldIcon));
}

function drawLines(col) {
    const colTop = (col.offsetTop - header.offsetHeight);
    const icon = col.children[0];
    let colRight = col.offsetLeft + col.offsetWidth;
    const iconHeight = iconWidth = icon.classList.contains('active') ?
        0.35 * window.innerWidth :
        0.15 * window.innerWidth;
    
    const endX = colRight - iconWidth / 2
    const endY = colTop + iconHeight / 2;
    const line = new Line(startX, startY, endX, endY);
    line.draw();

    startX = endX;
    startY = endY;
}

icons
    .forEach(icon => {
        icon.addEventListener('mouseover', activateIcon);
    });

}