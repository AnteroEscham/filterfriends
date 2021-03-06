VK.init({
    apiId: 6492870
});

function auth() {
    return new Promise((resolve, reject) => {
        VK.Auth.login(data => {
            if (data.session) {

                resolve();
            } else {
                reject();
            }
        }, 2)
    })
}

function callAPI(method, params) {
    params.v = '5.76';

    return new Promise((resolve, reject) => {
        VK.api(method, params, (data) => {

            if (data.error) {
                reject(data.error);

            } else {
                resolve(data.response);
            }
        })
    })
}

export {
    auth, 
    callAPI

};