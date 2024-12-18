import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../../auth/index";
import axios from "axios";

const options = {
  style: {
    base: {
      fontSize: "20px",
    },
    invalid: {
      color: "#9e2145",
    },
  },
};

const Payment = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const shippingInfo = JSON.parse(localStorage.getItem("shippinginfo")) || {};
  const { user, token } = isAuthenticated();
  const order = {
    orderItems: cartItems,
    shippingAddress1: shippingInfo.shippingAddress1,
    shippingAddress2: shippingInfo.shippingAddress2,
    city: shippingInfo.city,
    zip: shippingInfo.zip,
    phone: shippingInfo.phone,
    user: user._id,
  };
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo")) || {};
  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
    description: "Purchase of goods/service",
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    document.querySelector("#pay-btn").disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(`/api/process/payment`, paymentData, config);
      const clientSecret = data.client_secret;

      if (!stripe || !elements) {
        toast.error("Stripe is not initialized");
        document.querySelector("#pay-btn").disabled = false;
        return;
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.shippingAddress1,
              city: shippingInfo.city,
              country: shippingInfo.country || "US", // Default to 'US' if country is missing
            },
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
        document.querySelector("#pay-btn").disabled = false;
      } else if (result.paymentIntent.status === "succeeded") {
        order.paymentInfo = {
          id: result.paymentIntent.id,
          status: result.paymentIntent.status,
        };

        try {
          await axios.post(`/api/orders`, order, config);
          localStorage.removeItem("cartItems");
          toast.success("Payment successful! Order placed.");
          navigate("/success");
        } catch (error) {
          toast.error(error.response?.data?.message || error.message);
          document.querySelector("#pay-btn").disabled = false;
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      document.querySelector("#pay-btn").disabled = false;
    }
  };

  return (
    <div className="container">
      <div className="flex justify-center">
        <form onSubmit={submitHandler} className="w-1/2">
          <h2 className="text-center text-2xl font-bold mb-5">Card Information</h2>
          <div className="my-3">
            <label htmlFor="cardnumber" className="block mb-2">Card Number</label>
            <CardNumberElement id="cardnumber" options={options} />
          </div>
          <div className="my-3">
            <label htmlFor="cardexpiry" className="block mb-2">Expiry Date</label>
            <CardExpiryElement id="cardexpiry" options={options} />
          </div>
          <div className="my-3">
            <label htmlFor="cvc" className="block mb-2">CVC</label>
            <CardCvcElement id="cvc" options={options} />
          </div>
          <div className="my-2">
            <button
              type="submit"
              id="pay-btn"
              className="bg-yellow-300 text-center px-5 py-2 rounded-md w-full hover:bg-yellow-400"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
