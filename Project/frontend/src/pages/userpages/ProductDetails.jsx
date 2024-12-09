import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`/api/productdetails/${productId}`)
      .then((res) => setProduct(res.data))
      .catch(() => toast.error("Failed to fetch product details."));
  }, [productId]);

  const addtoCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productItem = {
      id: product._id,
      name: product.product_name,
      unitPrice: product.product_price,
      countInStock: product.countInStock,
      image: product.product_image,
      category: product.category?.category_name,
      description: product.product_description,
      quantity,
      price: product.product_price * quantity,
    };

    const existingItem = cartItems.find((item) => item.id === product._id);
    if (existingItem) {
      toast.error("Item is already present in your cart!");
    } else {
      cartItems.push(productItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      toast.success(`${productItem.name} added to the cart !`);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Image */}
          <div className="w-full md:w-2/4 px-4 mb-8">
            <img
              src={`http://localhost:8000/${product.product_image}`}
              alt={product.product_name || "Product"}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-2/4 px-4">
            <h2 className="text-3xl font-bold mb-2">{product.product_name}</h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">
                ${product.product_price}
              </span>
              <span className="text-gray-500 line-through">
                ${product.product_price}
              </span>
            </div>

            {/* Quantity Input */}
            <div className="mb-6 flex gap-x-3">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                max={product.countInStock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-18 text-start rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Add to Cart Button */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={addtoCart}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
