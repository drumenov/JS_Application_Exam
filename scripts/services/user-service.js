const userService = (() => {
    function register(username, password){
        return kinvey.post('user', '', 'basic', {username, password});
    }

    function login(){

    }

    function logout() {

    }

    function saveSession(data){
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('authToken', data._kmd.authtoken)
    }

    return {
        register,
        login,
        logout,
        saveSession
    }
})();