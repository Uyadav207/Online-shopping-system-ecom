import React, { useContext } from 'react'
import '../CSS/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Reducer/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
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
                prefix={"INR "}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal



// The Application is developed for ISTE BITS - SPider-Hackathon 