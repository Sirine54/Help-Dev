// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('pk_test_51LOOVeEMYjbSpP698RkTD5E74eGPv8hODhOZChSpGqr62EtHkqV6mkdPCWPgRuIuyFTMZIFzvW6BKYzTVu6Siq4t007a9IsfeS');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items:[

      {
          // title:"Web UX/UI Design",
          price:'{{PRICE_ID}}',
          // api:"price_1LOQhVEMYjbSpP6970D1my56"
          quantity: 1,
  
      },
      
      {
          // title:"Topic Leader",
          price:'{{PRICE_ID}}',
          // api:"price_1LOQgtEMYjbSpP69vqWXbODo"
          quantity: 1,
      }],


      // ,
      
      // {
      //     title:"Back-End Development",
      //     price:"60.00",
      //     api:"price_1LOQfREMYjbSpP69h97uMp6d"
      // },
          
      // {
      //     title:"Front-End Development",
      //     price:"60.00",
      //     api:"price_1LOQeTEMYjbSpP69alABlGk1"
      // },
  
  
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));