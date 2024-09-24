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
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", postUser);

router.post("/confirmation/:token", postEmailConfirmation);

router.post("/signin", signin);

router.post("/forgetpassword", forgetPassword);

router.put("/resetpassword/:token", resetPassword);

router.get("/userlist", userList);

router.get("/userdetails/:id", userDetails);

router.post("/signout", signout);

module.exports = router;
