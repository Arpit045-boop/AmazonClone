import React from 'react'
import "../CheckoutProduct.css"
import { useStateVal } from './Context/MyStateProvider'
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
        <div className="checkoutMyProduct">
            <img className="checkoutMyProduct_image" src={props.image} alt='' />
            <div className='checkoutProduct_info'>
                <p>{props.title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <button onClick={removeMyBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct