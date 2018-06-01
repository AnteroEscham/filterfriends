import {auth, callAPI} from './vk';
import { renderFriends, getVkFriends } from './friends';
import { storage } from './save';
import { friendsRight, friendsLeft } from './drag';


const   openBtn = document.querySelector('.js-btn--open'),
        closePopup = document.querySelector('.popup__close'),
        overlay = document.querySelector('.js-overlay');



openBtn.addEventListener('click', e => {
    auth()
    .then(() => {
        overlay.classList.add('overlay--visible');
        return callAPI('friends.get', {fields: 'nickname, photo_100'});

    })

    .then(get => {

        let friends = getVkFriends(get.items);
        
        renderFriends(friends, 'js-friends__list-left');

        if (storage.filtered !== undefined) {
            friendsRight.innerHTML = storage.filtered;

            let filteredID = [];

            for (const elem of friendsRight.children) {
                
                filteredID.push(elem.dataset.vkId);
            }

            filteredID.forEach(id => {
                
                for (const elem of friendsLeft.children) {

                    if (elem.dataset.vkId == id) {
                        friendsLeft.removeChild(elem);
                    }
                }
            })

            console.log(filteredID);
        }
    })
});


export {
    overlay
}