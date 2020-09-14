import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import "../CSS/Checkout.css";
import CheckoutProducts from './CheckoutProducts';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            <img 
                className="checkoutAds"
                src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                alt="Checkout_page"
            />                
        {basket?.length === 0 ? (
            <div>
                <h2>Your Cart is Empty, Shop Now</h2>
                <p>You have no items in your cart. So Go back to store and Buy stuff. Click on Add to Basket button and Come Back.</p>
            </div> 
        ): (
            <div>
                <h2 className="checkout_title">Your Shopping Cart</h2>
                {basket?.map((item) => (
                    <CheckoutProducts 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                
            </div>
        )}
        </div>
        {basket?.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
        </div>
    )
}

export default Checkout;




// checkout Page for the Shop-Cart application.