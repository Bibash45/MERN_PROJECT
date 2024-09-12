const mongoose = require("mongoose");

const { objectId } = mongoose.Schema;
// objectId is used to link data between the different collection
// it is used to create a foreign key in the database

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    product_descrition: {
      type: String,
      required: true,
    },
    product_image: {
      type: string,
      required: true,
    },
    category: {
      type: objectId,
      require: true,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
