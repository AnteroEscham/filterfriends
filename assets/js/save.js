import { friendsRight } from "./drag";
import { overlay } from "./buttons";


const saveButton = document.querySelector('.js-btn--save');

let storage = localStorage;

saveButton.addEventListener('click', e => {
    e.preventDefault();

    overlay.classList.remove('overlay--visible');
    storage.filtered = friendsRight.innerHTML;

});


export {
    storage
}
