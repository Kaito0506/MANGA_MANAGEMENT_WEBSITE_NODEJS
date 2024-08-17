const express = require('express');
const userController = require('../controllers/user.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');

const router = express.Router();

router
    .route('/')
    .get(userController.login)
    .all(methodNotAllowed);

router
    .route('/logout')
    .get(userController.logout)
    .all(methodNotAllowed);

router
    .route('/session')
    .get(userController.getSession)
    .all(methodNotAllowed);

module.exports = router;