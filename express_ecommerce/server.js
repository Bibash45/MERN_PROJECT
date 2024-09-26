const express = require("express");

const app = express();
require("dotenv").config();
const morgan = require("morgan");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const userRoute = require("./routes/userRoute");
require("./db/connection");
const bodyParser = require("body-parser");

// body-parser
app.use(bodyParser.json());
app.use("/public/uploads", express.static("public/uploads"));

//morgan
app.use(morgan("dev"));

// routes
app.use("/api", categoryRoute);
app.use("/api", productRoute);
app.use("/api", userRoute);
app.use("/api", orderRoute);

app.use("/", (req, res) => {
  res.json([{ message: "This is express server" }]);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
