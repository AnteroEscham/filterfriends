


const   friendsLeft = document.querySelector('.js-friends__list-left'),
        friendsRight = document.querySelector('.js-friends__list-right');


document.addEventListener('click', e => {
    const elem = e.target;

    if (elem.closest('.friends__plus')) {
        if (elem.closest('.js-friends__list-left')) {

            elem.closest('.friends__item').classList.add('filtered');
            friendsRight.appendChild(elem.closest('.friends__item'));

        } else {

            elem.closest('.friends__item').classList.remove('filtered');
            friendsLeft.appendChild(elem.closest('.friends__item'));
        }
    }
});



let dataEvent;

document.addEventListener('dragstart', e => {
    
    if (e.target.closest('.friends__item')) {
        let friend = e.target.closest('.friends__item');
        let currentList = e.target.closest('.friends__list');

        dataEvent = {item: friend, list: currentList};
    }    
});

document.addEventListener('dragover', e => {
    e.preventDefault();
});

document.addEventListener('drop', e => {
    e.preventDefault();
    
    let currentList = e.target.closest('.friends__list');

    if (currentList && currentList !== dataEvent.list) {
        
        if(currentList.classList.contains('js-friends__list-right')){
            dataEvent.item.classList.add('filtered');
        } else {
            dataEvent.item.classList.remove('filtered');
        }
        
        currentList.appendChild(dataEvent.item);
    }
});

export {
    friendsLeft,
    friendsRight
}