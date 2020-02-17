const searchBox = document.querySelector('.search-box');
const searchResults = document.querySelector('.search-results');
const searchField = document.querySelector('.search-box input[name="search"]');
const titleCheckBox = document.querySelector('.search-box input[name="titles-search"]');
const contentCheckBox = document.querySelector('.search-box input[name="content-search"]');
const searchIcon = document.querySelector('.main-menu .search-icon .fa-search');
const closeIcon = document.querySelector('.main-menu .search-box .close');

const textIncludes = (text, chunk) => text.toLowerCase().includes(chunk);
const defaultState = () => {
    // set the checkboxes to their default states
    titleCheckBox.checked = true;
    contentCheckBox.checked = false;
};
function search() {
    const text = searchField.value;
    let hasRow = false;
    searchResults.innerHTML = '';
    if (!text) return;
    pages.forEach(page => {
        let titleMatch;
        let row;
        if (titleCheckBox.checked) {
            titleMatch = textIncludes(page.title, text);
            if (titleMatch) row = createSearchResult(page, 'title');
        }
        // we have to exclude the occasion when we have matched the text in the title to avoid duplicating  pages
        if (contentCheckBox.checked && !titleMatch) {
            if (textIncludes(page.content, text)) row = createSearchResult(page, 'content');
        }
        if (row) {
            hasRow = true;
            searchResults.appendChild(row);
        }
    });

    if (!hasRow) {
        addNoResults();
    }
}

function createSearchResult(page, type) {
    const {title, href, thumbnailPath} = page; 
    const a = document.createElement('a');
    const searchResult = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const p = document.createElement('p');

    a.href = href;
    searchResult.classList.add('search-result');
    imageContainer.classList.add('search-result-img');
    image.src = thumbnailPath;
    image.alt = title;
    p.innerHTML = title;

    imageContainer.appendChild(image);
    searchResult.appendChild(imageContainer);
    searchResult.appendChild(p);
    a.appendChild(searchResult);

    return a;
}

function addNoResults() {
    const p = document.createElement('p');
    p.classList.add('no-results');
    p.innerHTML = 'No results';
    searchResults.appendChild(p);
}

function openSearchBox() {
    console.log(this);
    searchBox.classList.remove('hidden-scale');
}

function closeSearchBox() {
    searchBox.style.transition = '0s';
    searchBox.classList.add('hidden-scale');
    setTimeout(() => searchBox.style.transition = '.5s');
}

defaultState();

searchIcon.addEventListener('click', openSearchBox);
closeIcon.addEventListener('click', closeSearchBox);
searchField.addEventListener('input', search);
titleCheckBox.addEventListener('input', search);
contentCheckBox.addEventListener('input', search);



