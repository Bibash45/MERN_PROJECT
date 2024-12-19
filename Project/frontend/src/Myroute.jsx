import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/usercomponents/Layout";
import Homepage from "./pages/userpages/Homepage";
import Product from "./pages/userpages/Product";
import Dashboard from "./pages/adminpages/Dashboard";
import AdminHeader from "./components/admincomponents/AdminHeader";
import Addproduct from "./pages/adminpages/Addproduct";
import Productlist from "./pages/adminpages/Productlist";
import Register from "./pages/userpages/Register";
import Signinpage from "./pages/userpages/Signinpage";
import  CartPage  from "./pages/userpages/CartPage";
import Addcategory from "./pages/adminpages/Addcategory";
import Categorylist from "./pages/adminpages/Categorylist";
import EmailVerify from "./auth/EmailVerify";
import UpdateProduct from "./pages/adminpages/UpdateProduct";
import UpdateCategory from "./pages/adminpages/UpdateCategory";
import ProductDetails from "./pages/userpages/ProductDetails";
import Shipping from "./pages/userpages/Shipping";
import ConfirmOrder from "./pages/userpages/ConfirmOrder";
import Payment from "./pages/userpages/Payment";
const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* route for user pages */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route
              path="productdetail/:productId"
              element={<ProductDetails />}
            />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Signinpage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="email/confirmation/:token" element={<EmailVerify />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirm" element={<ConfirmOrder />} />
            <Route path="/success" element={<Payment />} />
          </Route>

          {/* route for admin pages */}
          <Route path="/admin" element={<AdminHeader />}>
            <Route index element={<Dashboard />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route
              path="updateproduct/:productId"
              element={<UpdateProduct />}
            />
            <Route path="productlist" element={<Productlist />} />
            <Route path="categorylist" element={<Categorylist />} />
            <Route
              path="updatecategory/:categoryId"
              element={<UpdateCategory />}
            />
            <Route path="addcategory" element={<Addcategory />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Myroute;
