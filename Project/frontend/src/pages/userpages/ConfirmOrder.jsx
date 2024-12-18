import React from "react";
import { isAuthenticated } from "../../auth/index";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const { user } = isAuthenticated();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price
  );
  console.log(totalPrice);

  return <div>ConfirmOrder</div>;
};

export default ConfirmOrder;
