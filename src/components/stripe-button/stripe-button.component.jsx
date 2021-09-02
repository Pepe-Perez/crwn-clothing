import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.style.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JVKNYL4Sr3BXQYgVk1W79GhrJVFDCL4gPrqnmBZ6VgCVytKwAIdVdusHzlvMRxBliy5zxRJhvqai5qIjNFtu2NK00l7PXP81O';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout 
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;