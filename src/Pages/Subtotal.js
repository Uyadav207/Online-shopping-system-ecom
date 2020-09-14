import React, { useContext } from 'react'
import '../CSS/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Reducer/reducer';


function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
            Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                    </p>
                    <small className="subtotal_discount">
                        <input type="checkbox"/> Available Discount 50%
                    </small>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal



// The Application is developed for ISTE BITS - SPider-Hackathon 