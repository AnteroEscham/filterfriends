import {friendsRight, friendsLeft} from './drag';

const searchLeft = document.querySelector('.search__input--left');
const searchRight = document.querySelector('.search__input--right');


searchLeft.addEventListener('keyup', e => {
    let value = e.currentTarget.value;

    for (const item of friendsLeft.children) {
        if (!isMatching(item.children[1].textContent, value)) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    }
    
});

searchRight.addEventListener('keyup', e => {
    let value = e.currentTarget.value;

    for (const item of friendsRight.children) {
        if (!isMatching(item.children[1].textContent, value)) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    }
    
});


function isMatching(full, chunk) {
    let fullStr = full.toLowerCase(),
        chunkStr = chunk.toLowerCase();

    if (fullStr.indexOf(chunkStr) != -1) {
        return true;
    }

    return false;

}
