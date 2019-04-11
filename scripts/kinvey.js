const kinvey = (() => {
    const BASE_URL= 'https://baas.kinvey.com/';
    //const APP_KEY = 'kid_H1rXoaJYE';
    //const APP_SECRET = 'ff26ab29fab6453d86836ac7198e6397';
    const APP_KEY = 'kid_r19BkM5uV';
    const APP_SECRET = '5ddbec7049ba44beaed7c7f395ae24c7';

    function makeRequest(method, collection, endpoint, auth){
        return {
            url: `${BASE_URL}${collection}/${APP_KEY}/${endpoint}`,
            method,
            headers: makeAuth(auth)
        }
    }

    function makeAuth(auth){
        if(auth.toLowerCase() === 'basic'){
            return {
                'Authorization': `Basic ${btoa(APP_KEY + ':'+ APP_SECRET)}`,
            };
        } else {
            return {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-type': 'application/json'
            };
        }
    }

    function get(){

    }

    function post(collection, endpoint, auth, data){
        let req = makeRequest('POST', collection, endpoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function update(){

    }

    function remove(){

    }

    return {
        get,
        post,
        update,
        remove
    }
})();