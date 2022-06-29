import React from 'react'
import { useStateVal } from './Context/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import "../Checkout.css"
function Checkout() {

  const [{ Mybasket }] = useStateVal();

  return (
    <div className='checkout'>
      {(Mybasket?.length === 0) ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {Mybasket?.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      )}

      {Mybasket?.length > 0 && (
        <div className='checkout_right'>
          <SubTotal />
        </div>
      )}

      {/* React currency format */}
    </div>


  )
}

export default Checkout