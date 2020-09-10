import React, { useState } from 'react'
import '../CSS/product.css'
import { useStateValue } from '../Context/StateProvider'

function Product({ id, title, image, price, rating }) {

    const [{}, dispatch] = useStateValue();

const addToBasket = () => {
        // Add Item to basket ..
        dispatch({ 
            type:'ADD_TO_BASKET',
            item :{
                id,
                title,
                image,
                price,
                rating
            }
    })
}

    return (
        <div className="product" >
            <div className="product_info" >
            <p>{title}</p>
            <p className="product_price" >
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating" >
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                        ))
                }
            </div>
            </div>
            <img
                src={image}
                alt="Coffe"
            />
            <button onClick={addToBasket} className="product_button" >Add to Basket</button>
        </div>
    )
}

export default Product
