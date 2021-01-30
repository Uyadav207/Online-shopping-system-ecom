import moment from 'moment';
import React from 'react'
import CheckoutProducts from './CheckoutProducts';
import '../CSS/Order.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../Context/StateProvider';

function Order({ order }) {
    const [{ user, basket }, dispatch] = useStateValue();
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>Order ID : {order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProducts
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    dontShowButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3>Order Total : {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"INR "}
            />
        </div>
    )
}

export default Order;
