import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../../assets/programming.svg";
import ProductImage from "../../assets/frontend.svg";

import "./Payment.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51LOOVeEMYjbSpP698RkTD5E74eGPv8hODhOZChSpGqr62EtHkqV6mkdPCWPgRuIuyFTMZIFzvW6BKYzTVu6Siq4t007a9IsfeS");
  }

  return stripePromise;
};

const Payment = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = 
    {
    price: "price_1LOQhVEMYjbSpP6970D1my56",
    quantity: 1,
  }
  // , {
  //   price: "price_1LOQhVEMYjbSpP6970D1my56",
  //   quantity: 1,
  // }, {
  //   price: "price_1LOQhVEMYjbSpP6970D1my56",
  //   quantity: 1,
  // }]
  // {
  //   price: "price_1LOQgtEMYjbSpP69vqWXbODo",
  //   quantity: 1,
  // },
  // {
  //   price: "price_1LOQg3EMYjbSpP69LNJETJ8W",
  //   quantity: 1,
  // },
  // {
  //   price: "price_1LOQfREMYjbSpP69h97uMp6d",
  //   quantity: 1,
  // }, {
  //   price: "price_1LOQeTEMYjbSpP69alABlGk1",
  //   quantity: 1,
  // }]

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/Success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
    <div className="boxCkout">
      <p className="checkout-title">Design</p>
      <p className="checkout-description">
      Learn UX/UI
      </p>
      <h1 className="checkout-price">$15</h1>
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
       
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
        <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      </button>
      </div>
      <div className="boxCkout">
      <p className="checkout-title">Design</p>
      <p className="checkout-description">
      Learn UX/UI
      </p>
      <h1 className="checkout-price">$25</h1>
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
{/* 
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div> */}
      </button>
      </div>
    </div>
  );
};

export default Payment;
