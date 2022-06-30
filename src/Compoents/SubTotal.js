import React from 'react'
import "../Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateVal } from './Context/MyStateProvider'
import { getMyBasketTotal } from './Context/Reducer'

function SubTotal() {
    const [{ Mybasket }] = useStateVal();
    return (
        <div className='subtotal'>
            <h1>Subtotal</h1>

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({Mybasket.length} item):<strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contain a gift
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getMyBasketTotal(Mybasket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal