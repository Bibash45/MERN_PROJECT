const express = require("express");
const {
  postUser,
  postEmailConfirmation,
  signin,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", postUser);

router.post("/confirmation/:token", postEmailConfirmation);

router.post("/signin", signin);

module.exports = router;
