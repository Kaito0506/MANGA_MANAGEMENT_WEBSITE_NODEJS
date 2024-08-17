function makeUserService() {
    const baseUrl = '/api/user';
    // const headers = {
    //     'Content-Type': 'application/json',
    // }


    async function login(username, password){
        const url = `${baseUrl}?username=${username}&password=${password}`;
        return await fetch(url).then((res) => res.json());
    }

    async function logout(){
        const url = `${baseUrl}/logout`;
        await fetch(url).then((res) => res.json());
    }

    async function getSession(){
        const url = `${baseUrl}/session`;
        return await fetch(url).then((res) => res.json());
    }

    return {
        login,
        logout,
        getSession

    }
};
export default makeUserService();