import React from 'react'
import "../Product.css"
import { useStateVal } from './Context/StateProvider';

function Product(props) {
    const [{ }, dispatch] = useStateVal();
    const addToMyBasket = () => {
        // Add item to the basket....
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })
    }

    return (
        <div className='product'>
            <img src={props.image} alt="" />
            <div className='product_info'>
                <p>{props.title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
            </div>

            <button onClick={addToMyBasket}>Add to Basket</button>
        </div>
    )
}

export default Product