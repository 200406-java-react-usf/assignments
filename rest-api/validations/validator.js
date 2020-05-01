const {body} = require('express-validator');

exports.hasDescription = body("description")
    .isLength({ min: 5 })
    .withMessage("Description is required. Minimum Length 5 characters");

exports.isEmail = body("email")
    .isEmail()
    .withMessage("Email field must contain a correct email");

exports.hasPassword = body("password")
    .exists()
    .withMessage("Password cannot be empty");

exports.hasName = body("name")
    .isLength({min: 5})
    .withMessage("Name is Required. Minimum length 5 characters");