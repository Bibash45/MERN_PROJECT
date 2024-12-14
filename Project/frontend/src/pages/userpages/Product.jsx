import Cards from "../../components/usercomponents/Cards";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setError("");
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/productlist`);
        setProduct(data);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      {loading && <p className="text-center text-2xl">Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && product.length > 0 && <Cards product={product} />}
      {!loading && !error && product.length === 0 && (
        <p className="text-center text-2xl">No products found.</p>
      )}
    </>
  );
};

export default Product;
