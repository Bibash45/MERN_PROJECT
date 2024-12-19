import React, { useState, useEffect } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";

const PaymentElement = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");
  useEffect(() => {
    async function getStrippedApiKey() {
      const { data } = await axios.get(`/api/stripeapi`);
      setStripeApiKey(data.stripeApiKey);
    }
    getStrippedApiKey();
  }, []);
  return <>
  {stripeApiKey && (
    <Elements stripe={loadStripe(stripeApiKey)}>
        <Payment />
    </Elements>
  )}
  </>;
};

export default PaymentElement;
