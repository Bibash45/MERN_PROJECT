import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const [products, setProducts] = useState({});
  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        return console.log(err);
      });
  }, []);
  return <>
   <div className="container">
    <div className="row d-flex justify-content-around align-items-center my-4">
      <div className="col-md-3">
        <img src={products.image} alt={products.title} width={300} />
      </div>
      <div className="col-md-8 ">
        <h1>{products.title}</h1>
        <h1 className="text-warning">${products.price}</h1>
        <p>{products.description}</p>
        <p className="text-primary"><strong>Category:</strong>{products.category}</p>
      <div className="my-3">
        <button className="btn btn-warning">Add to Cart</button>
      </div>
      </div>
    </div>
   </div>
  </>;
};

export default ProductDetails;
