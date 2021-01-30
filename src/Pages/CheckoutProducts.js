import React from 'react'
import '../CSS/CartProduct.css';
import { useStateValue } from '../Context/StateProvider';

function CheckoutProducts({ id, title, price, image, rating, dontShowButton }) {
    const [{ basket }, disptach] = useStateValue();
    const removeItem = () => {
        disptach({
            type: 'REMOVE_FROM_BASKET',
            id,
        })
    }

    return (
        <div className="checkout_product">
            <img className="Product_Image"
                src={image} alt="Images"
            />
            <div className="checkoutProducts_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))
                    }
                </div>
                {(dontShowButton) ? null : <button onClick={removeItem} >Remove From Cart</button>}

            </div>
        </div>
    )
}

export default CheckoutProducts
