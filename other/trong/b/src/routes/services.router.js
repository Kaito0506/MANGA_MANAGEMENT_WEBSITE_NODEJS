const express = require('express');
const servicesController = require('../controllers/services.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');
const router = express.Router();


router
    .route('/')
    .get(servicesController.getBooksByFilter)
    .post(servicesController.addBook)
    .delete(servicesController.deleteAllBooks)
    .all(methodNotAllowed);

router
    .route('/:id')
    .get(servicesController.getBook)
    .put(servicesController.updateBook)
    .delete(servicesController.deleteBook)
    .all(methodNotAllowed);


    
module.exports = router;