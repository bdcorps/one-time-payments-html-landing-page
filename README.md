### Pre-Order Landing Page with One-Time Stripe Payment
A landing page that can be used to gauge demand from early adopters using one-click pre-orders. Written guide available at: [saasbase.dev](https://saasbase.dev)

## Features
- Easy to customize
- Responsive HTML/CSS
- Stripe One-Time Payments

## Installation
The project is set up to be super easy to run. 
1. Sign up for a Stripe account [here](https://dashboard.stripe.com/login). 
2. Turn on `Client-Only Integration` under Settings > Checkout Settings. 
3. Add a new product. Copy the `Pricing API ID` and paste it in the `data-price-id` property of the payment button in `index.html`.
4. Replace the `PUBLISHABLE_KEY` in `js/main.js` with yours from Developers > API Key. 

Need more detailed instructions? Check out the full guide at [saasbase.dev](saasbase.dev).