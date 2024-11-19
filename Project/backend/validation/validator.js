const { check, validationResult } = require("express-validator");

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }
};

// category validation
exports.categoryValidation = [
  check("category_name", "Category is mandatory")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("category name must be more than 3 character"),
];

// product validation
exports.productValidation = [
  check("product_name", "productname is mandatory")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("product name must be more than 3 characters"),

  check("product_price", "product price is mandatory")
    .notEmpty()
    .isNumeric()
    .withMessage("product price must be numeric values only. "),

  check("countInStock", "count In stock is mandatory")
    .notEmpty()
    .isNumeric()
    .withMessage("count in stock must be numeric values only. "),

  check("product_description", "product description is mandatory")
    .notEmpty()
    .isLength({ min: 20 })
    .withMessage("product desscription must be at least of 20 characters."),

  check("category", "category is mandatory").notEmpty(),
];

// user validation
exports.userValidation = [
  check("name", "Name is mandatory")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("name must be atleast of 3 character"),
  check("email", "email is mandatory")
    .notEmpty()
    .isEmail()
    .withMessage("invalid email format"),
];

exports.passwordValidation = [
  check("password", "password is mandotory")
    .notEmpty()
    .matches(/[a-z]/)
    .withMessage("password must contain atleast one lowercase alphabet")
    .matches(/[A-z]/)
    .withMessage("password must contain atleast one uppercase alphabet")
    .matches(/[0-9]/)
    .withMessage("password must contain atleast one numeric value ")
    .matches(/[@#$_!?]/)
    .withMessage("password must contain atleast one special character  ")
    .isLength({ min: 8 })
    .withMessage("password must contain atleast 8 character"),
];
