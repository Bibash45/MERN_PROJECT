import Cards from "../../components/usercomponents/Cards";
import CarouselComponent from "../../components/usercomponents/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
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
      <CarouselComponent />
      <h3 className="ml-4 sm:ml-[60px] md:ml-[100px] lg:ml-[350px]  text-sm sm:text-md md:text-xl lg:text-2xl font-semibold opacity-80 pt-5">Flash Sales</h3>
      <Cards product={product.slice(0, 10)} />
    </>
  );
};

export default Homepage;
