import React from 'react'
import "../CheckoutProduct.css"
import { useStateVal } from './Context/StateProvider'
function CheckoutProduct(props) {
    const [{ Mybasket }, dispatch] = useStateVal();
    const removeMyBasket = () => {
        // remove from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={props.image} alt='' />
            <div className='checkoutProduct_info'>
                <p>{props.title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(props.rating).fill().map((_) => (
                            <p>star</p>
                        ))
                    }
                </div>
                <button onClick={removeMyBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct