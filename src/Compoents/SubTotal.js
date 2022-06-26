import React from 'react'
import "../Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './Reducer'

function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <h1>Subtotal</h1>

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({basket.length} item):<strong>{ `${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/>This order contain a gift
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal