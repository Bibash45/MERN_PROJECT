import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`/api/productlist`);
        const data = await response.json();
        setProducts(data);

        setLoading(false);
        setSuccess(true);
      } catch (err) {
        setError("Failed to fetch data: " + err.message);
        setSuccess(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {loading && <h1 className="text-center text-blue-500">Loading...</h1>}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* Table - Responsive design with tailwind classes */}
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Count In Stock</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Images</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.product_name}
                </th>
                <td className="px-6 py-4">{product.countInStock}</td>
                <td className="px-6 py-4">{product.category.category_name}</td>
                <td className="px-6 py-4">{product.product_description}</td>
                <td className="px-6 py-4">${product.product_price}</td>
                <td className="px-6 py-4">
                  <img
                    className="h-16 w-auto"
                    src={`http://localhost:8000/${product.product_image}`}
                    alt={product.product_name}
                  />
                </td>
                <td className="px-6 py-4">
                  <Link
                    to="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View - Stack product details */}
        <div className="block sm:hidden">
          {products.map((product) => (
            <div key={product._id} className="p-4 mb-4 border rounded-lg shadow-md">
              <div className="font-medium text-gray-900">{product.product_name}</div>
              <div className="text-sm text-gray-600">Category: {product.category.category_name}</div>
              <div className="text-sm text-gray-600">Description: {product.product_description}</div>
              <div className="text-sm text-gray-600">Price: ${product.product_price}</div>
              <div className="text-sm text-gray-600">Stock: {product.countInStock}</div>
              <div className="mt-2">
                <img
                  className="h-32 w-auto"
                  src={`http://localhost:8000/${product.product_image}`}
                  alt={product.product_name}
                />
              </div>
              <div className="mt-4">
                <Link
                  to="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Products or Errors */}
        {!loading && !error && products.length === 0 && (
          <p className="text-center text-gray-500">No products found.</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>
    </>
  );
};

export default Productlist;
