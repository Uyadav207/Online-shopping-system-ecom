const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51GyJngGgjBdQxSfgALLAtMtLi2AXojWpfucXheV1gFyNnXqPuL6STjGtR9rRtQHO3BDaMkFlqAOvLXnQv9n8XPo000qF0L3LQ6')

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req,res) => res.status(200).send("Hello"));
app.post('/payments/create/', async (req,res) => {
    const total = req.query.total;
    console.log("Payment Recieved", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "INR",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

exports.api = functions.https.onRequest(app);



// Main Stripe Cloud Function.
