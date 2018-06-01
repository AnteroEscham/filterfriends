
const source = document.getElementById('friends-list').innerHTML;
let template = Handlebars.compile(source);



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
    const html = template(array);
    document.querySelector(`.${targetClass}`).innerHTML = html;
}





export {
    renderFriends,
    getVkFriends
}