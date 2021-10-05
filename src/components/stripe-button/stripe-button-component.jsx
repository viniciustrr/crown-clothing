import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JhDAaIkRTPDqFCFZ7Wav4VsDVQwxH6wgVPTQln1vtQ1N4kDRBHSQZW1yd6rQOtAoC2tIHZCd1OnoBk16YX7XGwR005YRaI3WV';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }


    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description ={`Your total is $${price}`}
            amount ={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;