import React from 'react'
import "../Product.css"
import { useStateVal } from './Context/MyStateProvider';

function Product(props) {
    const [{ Mybasket }, dispatch] = useStateVal();
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
        <div className='Myproduct'>
            <img src={props.image} alt="" />
            <div className='My_product_info'>
                <p>{props.title}</p>
                <p className='My_product_price'>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
            </div>

            <button onClick={addToMyBasket}>Add to Basket</button>
        </div>
    )
}

export default Product