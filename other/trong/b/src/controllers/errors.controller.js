const ApiError = require('../api-error');


function methodNotAllowed(req, res, next) {
    if(req.route){
        const httpMethods = Object.keys(req.route.methods)
            .filter((method) => method !== '_all')
            .map((method) => method.toUpperCase());
        return next(
            new ApiError(405, 'Method Not Allowed', {
                Allow: httpMethods.join(', '),
            })
        );
    }
    return next();
}

function resourceNotFound(req, res, next){
    return next(new ApiError(404, 'Resource not found'));
}

function handleError(error, req, res, next){
    if(res.headersSent){
        return next(error);
    }
    return res 
        .status(error.statusCode || 500)
        .set(error.headers || {})
        .json({
            message: error.message || 'Internal Server Error',
        });
}

module.exports = {
    methodNotAllowed,
    resourceNotFound,
    handleError,
}