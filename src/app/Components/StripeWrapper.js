"use client";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_live_zIC10IoWdJstPXmIbFaRuDRl');
export default function StripeWrapper({ children }) {
  return (
    <Elements stripe={stripePromise}>{children}</Elements>
  );
}
