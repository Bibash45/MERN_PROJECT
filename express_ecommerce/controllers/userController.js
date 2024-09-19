const User = require("../models/userModel");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const sendEmail = require("../utils/setEmail");

// to register user
exports.postUser = async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  // check if the email is already registered or not
  User.findOne({ email: user.email }).then(async (data) => {
    if (data) {
      return res
        .status(400)
        .json({ error: "Email is already registered . Please try again" });
    } 
    else {
      user = await user.save();
      if (!user) {
        return res.status(400).json({ error: "unable to register user" });
      }

      // generate token
      let token = new Token({
        token: crypto.randomBytes(16).toString("hex"),
        userId: user._id,
      });
      token = await token.save();
      if (!token) {
        return res.status(400).json({ error: "unable to create token" });
      }
      // send email to user
      sendEmail({
        from: "no-reply@ecommerce.com",
        to: user.email,
        subject: "Verify your email",
        text: `hello , \n\n please verify your email by clicking the link below \n\n 
        http:\/\/${req.headers.host}\/api\/confirmation\/${token.token}
        `, //http://localhost:8000/api/confirmation/1234567
      });
      res.send(user);
    }
  });
};
