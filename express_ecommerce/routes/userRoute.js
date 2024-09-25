const express = require("express");
const {
  postUser,
  postEmailConfirmation,
  signin,
  forgetPassword,
  resetPassword,
  userlists,
  userList,
  userDetails,
  signout,
  requireSignin,
} = require("../controllers/userController");
const {
  userValidation,
  passwordValidation,
  validation,
} = require("../validation/validator");
const router = express.Router();

router.post(
  "/register",
  userValidation,
  passwordValidation,
  validation,
  postUser
);

router.post("/confirmation/:token", postEmailConfirmation);

router.post("/signin", signin);

router.post("/forgetpassword", forgetPassword);

router.put(
  "/resetpassword/:token",
  passwordValidation,
  validation,
  resetPassword
);

router.get("/userlist", requireSignin, userList);

router.get("/userdetails/:id", requireSignin, userDetails);

router.post("/signout", signout);

module.exports = router;
