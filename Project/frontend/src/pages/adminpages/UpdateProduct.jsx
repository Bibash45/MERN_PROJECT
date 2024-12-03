import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../auth";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { token } = isAuthenticated();

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({
    product_name: "",
    product_price: "",
    product_description: "",
    countInStock: "",
    product_image: "",
    category: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const onHandleImage = (e) => {
    setProduct((prevState) => ({
      ...prevState,
      product_image: e.target.files[0],
    }));
  };

  useEffect(() => {
    axios
      .get(`/api/categorylist`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get(`/api/productdetails/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const productData = res.data;
        setProduct({
          product_name: productData.product_name,
          product_price: productData.product_price,
          product_description: productData.product_description,
          countInStock: productData.countInStock,
          product_image: productData.product_image,
          category: productData.category_id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token, productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product.product_name);
    formData.append("product_price", product.product_price);
    formData.append("product_description", product.product_description);
    formData.append("product_image", product.product_image);
    formData.append("countInStock", product.countInStock);
    formData.append("category", product.category);

    try {
      await axios.put(`/api/updateproduct/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccess(true);
      setError("");
      setProduct({
        product_name: "",
        product_price: "",
        product_description: "",
        product_image: "",
        countInStock: "",
        category: "",
      });
      
      navigate("/admin/productlist");
    } catch (error) {
      const message = error.response?.data?.message || "Something went wrong";
      setError(message);
      console.error(error);
      setSuccess(false);
    }
  };

  const showError = () =>
    error && (
      <div className="bg-red-100 text-red-800 p-4 rounded-lg" role="alert">
        <strong className="font-bold">Error: </strong>
        <span>{error}</span>
      </div>
    );

  const showSuccess = () =>
    success && (
      <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
        <strong className="font-bold">Success: </strong>
        <span>Product has been updated successfully</span>
      </div>
    );

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-28 px-10 py-10 shadow-xl border border-blue-500 rounded-xl">
        {showError()}
        {showSuccess()}

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Product Name
          </label>
          <input
            onChange={onHandleChange}
            value={product.product_name}
            name="product_name"
            type="text"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter a product name"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Product Price
          </label>
          <input
            onChange={onHandleChange}
            value={product.product_price}
            name="product_price"
            type="number"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter product price"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Product Description
          </label>
          <textarea
            onChange={onHandleChange}
            value={product.product_description}
            name="product_description"
            className="block w-full h-24 px-5 bg-white border border-gray-300 rounded-lg"
            placeholder="Enter product description"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Product Image
          </label>
          <input
            onChange={onHandleImage}
            type="file"
            accept="image/*"
            className="block w-full h-11 px-5 bg-white"
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Quantity
          </label>
          <input
            onChange={onHandleChange}
            value={product.countInStock}
            name="countInStock"
            type="number"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full"
            placeholder="Enter quantity in stock"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Category
          </label>
          <select
            onChange={onHandleChange}
            value={product.category}
            name="category"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full text-black"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {category?.map((c) => (
              <option key={c._id} value={c._id} className="text-black bg-white">
                {c.category_name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-52 h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full text-white"
        >
          Update Product
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
