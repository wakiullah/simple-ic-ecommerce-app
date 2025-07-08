import React, { Children, useReducer } from 'react'
import { CartContext, CartContextDispatch } from './CartContext'
import { cartInitialValue, CartReducer } from './CartReducer'

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(CartReducer, cartInitialValue)
    return (
        <CartContext.Provider value={state}>
            <CartContextDispatch.Provider value={dispatch}>
                {children}
            </CartContextDispatch.Provider>
        </CartContext.Provider>
    )
}

export default CartProvider