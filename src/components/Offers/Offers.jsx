import React from 'react'
import { offerData } from './OfferData'
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {List, ListItem ,ListIcon} from '@chakra-ui/react';
import {MdDone,MdSettings} from "react-icons/md";

import './Offers.css'
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51LOOVeEMYjbSpP698RkTD5E74eGPv8hODhOZChSpGqr62EtHkqV6mkdPCWPgRuIuyFTMZIFzvW6BKYzTVu6Siq4t007a9IsfeS");
  }

  return stripePromise;
};



function Offers() {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const items =[

    {
    price: "price_1LOQhVEMYjbSpP6970D1my56",
    quantity: 1,
  },
  {
    price: "price_1LOQgtEMYjbSpP69vqWXbODo",
    quantity: 1,
  },

]

   const checkoutOptions = {
      
        lineItems: [items[0]],
        mode: "payment",
        successUrl: `${window.location.origin}/Success`,
        cancelUrl: `${window.location.origin}/cancel`,
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
    <div id='offers'> 

<div className="offer_container">
   
      {offerData.map(offer=>{
          
        return(
          <div className="offerBox">  
 
              <h1>{offer.title}</h1>
              <img src={offer.image} alt="icon" className='offerImg'/>
              <List spacing={8} className="offList">
  <ListItem>
    <ListIcon as={MdDone} color='green' className='offIcon' />
    You will be able to master skills
  </ListItem>
  <ListItem>
    <ListIcon as={MdDone}  color='green' className='offIcon' />
    You will learn the latest technologies
  </ListItem>
  <ListItem>
    <ListIcon as={MdDone}  color='green' className='offIcon' />
    Become job-ready by understanding how coding really works behind the scenes
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={MdSettings}  className='offIcon' />
    Full Practice Exam with Explanations included!
  </ListItem>
</List>
            <p>&euro;{offer.price}</p>
            <button className='btnOff contactBtn' onClick={redirectToCheckout}
              >Purchase</button>
            </div>

        )
       
      })}

    </div>  
    
   </div>
  );


}
export default Offers