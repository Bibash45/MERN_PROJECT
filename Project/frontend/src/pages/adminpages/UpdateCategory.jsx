import axios from "axios";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../auth";
import { useParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateCategory = () => {
  const { token } = isAuthenticated();
  const { categoryId } = useParams();
  const [category, setCategory] = useState({ category_name: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`/api/categorydetails/${categoryId}`);
        setCategory(response.data);
        console.log(response.data);
        
      } catch (err) {
        setError("Failed to load category details.");
        console.error(err);
      }
    };

    fetchCategory();
  }, [categoryId]);

  if (!categoryId) {
    return <Navigate to="/categorylist" />;
  }

  const onHandleChange = (e) => {
    const { value } = e.target;
    setCategory({ ...category, category_name: value });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      await axios.put(
        `/api/updatecategory/${categoryId}`,
        { category_name: category.category_name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Category updated successfully");
      setSuccess(true);
    } catch (err) {
      setError("Failed to update category. Please try again.");
      console.error(err);
    }
  };

  return (
    <form className="max-w-md mx-auto my-28" onSubmit={onHandleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="category_name"
          value={category.category_name || ""}
          onChange={onHandleChange}
          id="floating_category"
          className="block pt-8 px-0 w-full text-3xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_category"
          className="peer-focus:font-medium absolute text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  "
        >
          Enter category name
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && (
        <p className="text-green-500 mt-2">Category updated successfully!</p>
      )}
    </form>
  );
};

export default UpdateCategory;
