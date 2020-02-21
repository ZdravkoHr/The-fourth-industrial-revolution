const section = document.querySelector('section.gallery');
const overlay = document.querySelector('.black-gallery-overlay');
const galleryContainer = document.querySelector('.gallery-container');
const images = [
    {
        path: '../media/1st\ rev\ pics/1st.jpeg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st1.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st-inventions.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st2.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st5.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st-inventions2.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st34.jpg',
        info: 'lorem'
    },
    {
        path: '../media/1st\ rev\ pics/1st-inventions3.jpg',
        info: 'lorem'
    }
];

function openContainer(e) {
    const currentImg_container = document.querySelector('.gallery-container .current-img');
    const index = e.target.dataset.index;
    const img = images[index];
    overlay.classList.remove('d-none');
    center(galleryContainer);
    currentImg_container.style.backgroundImage = `url('${img.path}')`;
    console.log(currentImg_container);
}


section.addEventListener('click', openContainer);