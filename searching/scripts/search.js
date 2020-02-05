const searchBox = document.querySelector('.search-result-box');
const searchResults = document.querySelector('.search-results');
const searchField = document.querySelector('.search-result-box input[name="search"]');
const titleCheckBox = document.querySelector('.search-result-box input[name="titles-search"]');
const contentCheckBox = document.querySelector('.search-result-box input[name="content-search"]');

function search() {
    const text = removeSpecialChars(searchField.value);
    let hasRow = false;
    searchResults.innerHTML = '';
    if (!text) return;
    pages.forEach(page => {
        const regExp = new RegExp(text, 'gi');
        let titleMatch;
        let row;
        if (titleCheckBox.checked) {
            titleMatch = regExp.test(page.title);
            if (titleMatch) row = createSearchResult(page, 'title');
        }
        // we have to exclude the occasion when we have matched the text in the title to avoid duplicating  pages
        if (contentCheckBox.checked && !titleMatch) {
            if (regExp.test(page.content)) row = createSearchResult(page, 'content');
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

function clickedOnBox(element) {
    if (!element) return false;
    let timesLooped = 0;
    let foundClass = element.classList.contains('search-result-box');
    // 6 are the most possible times we have to look for the box
    while (timesLooped < 6 && !foundClass) {
        element = element.parentNode;
        if (!element.classList) return false;
        foundClass = element.classList.contains('search-result-box');
        timesLooped++;
    }

    return foundClass;
} 

function removeSpecialChars(str) {
    const pattern = /([\\^${}[\]().*+?|<>&])/;
    let matches = pattern.exec(str);
    let index = matches ? matches.index : 0;
    while (matches) {
      str = str.substring(0, index) + str.substring(index).replace(matches[0], '\\' + matches[1]);
      matches = pattern.exec(str.substring(index + 2));
      if (!matches) break;
      index += matches.index + 2;
    }

    return str;
}

searchField.addEventListener('input', search);
titleCheckBox.addEventListener('input', search);
contentCheckBox.addEventListener('input', search);

document.addEventListener('click', (e) => {
    if (!clickedOnBox(e.target)) searchResults.innerHTML = '';
});


