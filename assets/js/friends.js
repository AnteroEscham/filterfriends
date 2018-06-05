import render from "../templates/friends.hbs";

function getVkFriends (items) {
    
    let friends = [];

    items.forEach(element => {
        friends.push({
            userpic: element.photo_100,
            firstName: element.first_name,
            lastName: element.last_name,
            id: element.id
        })
    });

    return friends;
}


function renderFriends(array, targetClass) {
    document.querySelector(`.${targetClass}`).innerHTML = render({friends: array});
}





export {
    renderFriends,
    getVkFriends
}