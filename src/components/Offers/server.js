
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const app = express();
app.use(express.static('public'));
require("dotenv")
// const DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: [
      'card'
    ],
    line_items:[

      {
         
          price:'{{PRICE_ID}}',
          quantity: 1,
  
      },
      
      {
          
          price:'{{PRICE_ID}}',
          quantity: 1,
      },
      {
        
          price:'{{PRICE_ID}}',
          quantity: 1,
      },
          
      {
        
           price:'{{PRICE_ID}}',
           quantity: 1,
      },
  
    
    ],    

    mode: 'subscription',
    success_url: `${process.env.DOMAIN_URL}?success=true`,
    cancel_url: `${process.env.DOMAIN_URL}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));