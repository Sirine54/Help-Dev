import React from "react";
import { offerData } from "./OfferData";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdDone, MdSettings } from "react-icons/md";
import "./Offers.css";


let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51LOOVeEMYjbSpP698RkTD5E74eGPv8hODhOZChSpGqr62EtHkqV6mkdPCWPgRuIuyFTMZIFzvW6BKYzTVu6Siq4t007a9IsfeS"
    );
  }

  return stripePromise;
};

function Offers() {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);


function add(item){
  console.log(item)
}
  const items = [
    {
      price: "price_1LOQhVEMYjbSpP6970D1my56",
      quantity: 1,
    },
    {
      price: "price_1LOQgtEMYjbSpP69vqWXbODo",
      quantity: 1,
    },
    {
      price: "price_1LOQfREMYjbSpP69h97uMp6d",
      quantity: 1,
    },
    {
      price: "price_1LOQeTEMYjbSpP69alABlGk1",
      quantity: 1,
    },
  ];

let checkoutOptions

// filterItem.map((index)=>{
for(let i=0;i<items.length;i++){
  // return(
  checkoutOptions = {
    
    lineItems:[items[i]],
      mode: "subscription",
      successUrl: `${window.location.origin}/Success`,
      cancelUrl: `${window.location.origin}/cancel`
    }
    // )
  }

// })

let redirectToCheckout;
// filterItem.map((item)=>{
     redirectToCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    console.log("redirectToCheckout");

    const stripe = await getStripe();
  
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
   
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
// });

  return (
    <div id="offers">
      <h4>Available Courses</h4>
      <div className="offer_container">
        {offerData.map((offer,i) => {
         
          return (
            <div
              className="offerBox"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <h1>{offer.title}</h1>
              <img src={offer.image} alt="icon" className="offerImg" />
              <List spacing={8} className="offList">
                <ListItem>
                  <ListIcon as={MdDone} color="green" className="offIcon" />
                  You will be able to master skills
                </ListItem>
                <ListItem>
                  <ListIcon as={MdDone} color="green" className="offIcon" />
                  You will learn the latest technologies
                </ListItem>
                <ListItem>
                  <ListIcon as={MdDone} color="green" className="offIcon" />
                  Become job-ready by understanding how coding really works
                  behind the scenes
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={MdSettings} className="offIcon" />
                  Full Practice Exam with Explanations included!
                </ListItem>
              </List>
              <p>&euro;{offer.price}</p>

              <button  key={i}
                className="btnOff contactBtn"
                // onClick={redirectToCheckout}
                onClick={redirectToCheckout}
                // disabled={isLoading}
              >
                {/* {isLoading ? "Loading..." : "Get Started"} */}
                Get Started
              </button>
            </div>
          );
          
        })}

      </div>
    </div>
  );
}
export default Offers;
