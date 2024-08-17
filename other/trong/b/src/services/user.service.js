const knex = require('../database/knex');


function userService(){
    async function login(username, password){
        // const { username, password } = query;
        const authenticated = knex('users').where({username, password}).first();
        return authenticated;
    }


    /////////////////////
    return {
        login,
    }
}


module.exports = userService;