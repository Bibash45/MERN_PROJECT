const Product = require("../models/productModel");

// to post/insert product
exports.postProduct = async (req, res) => {
  try {
    // Check if the image was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Product image is required" });
    }

    // Create the product with the uploaded image path
    let product = new Product({
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      countInStock: req.body.countInStock,
      product_description: req.body.product_description,
      product_image: req.file.path, // The path is provided by Multer
      category: req.body.category,
    });

    // Save the product to the database
    product = await product.save();

    if (!product) {
      return res.status(400).json({ error: "Something went wrong while saving the product" });
    }

    // Send the created product in response
    res.status(201).json(product);
  } catch (error) {
    // Send error response for any server-side issues
    res.status(500).json({ error: "Internal server error: " + error.message });
  }
};


// retrieve all product
exports.productList = async (req, res) => {
  const product = await Product.find().populate("category", "category_name");
  if (!product) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(product);
};

// productdetails
exports.productDetail = async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    "category",
    "category_name"
  );
  if (!product) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(product);
};

// update product
exports.updateProduct = async (req, res) => {
  try {
    // Find the product by ID first
    const existingProduct = await Product.findById(req.params.id);
    
    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Check if a new file was uploaded, else keep the old image path
    const productImage = req.file ? req.file.path : existingProduct.product_image;

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        countInStock: req.body.countInStock,
        product_description: req.body.product_description,
        product_image: productImage,  // Use new image if uploaded, otherwise keep old
        category: req.body.category,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(400).json({ error: "Something went wrong while updating the product" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal server error: " + error.message });
  }
};


// delete proc=duct
exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: "something went wrong" });
      } else {
        return res
          .status(200)
          .json({ message: "product deleted successfully" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};
