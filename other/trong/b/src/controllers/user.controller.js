const userServices = require('../services/user.service');
const ApiError = require('../api-error');
// funtion to login
async function login(req, res, next) {
    try {
        const services = userServices();
        const username = req.query.username;
        const password = req.query.password;
        authenticatedUser = await services.login(username, password);
    }
    catch (err) {
        console.log(err);
        return next(new ApiError(500, "An error occurred while logging in"));
    }
    req.session.user = authenticatedUser;
    return res.send(authenticatedUser);
}

// define function to logout
async function logout(req, res, next) {
    req.session.destroy();
    return res.send({ message: "Logged out successfully" });
}

//define fucntion to get session 
async function getSession(req, res, next) {
    return res.send(req.session);

}

module.exports = {
    login,
    logout,
    getSession,
}