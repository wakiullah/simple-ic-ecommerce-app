import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { products } from '../products/products'
import { CartContextDispatch } from '../Features/Cart/CartContext'
import { toast } from 'react-toastify'
function ProductDetails() {
    const params = useParams()
    const displayProduct = products.filter(product => product.id === params.pid)[0]

    const dispatch = useContext(CartContextDispatch)

    const addToCartHandler = () => {
        dispatch({ type: "ADD_PRODUCT", payload: displayProduct })
        toast('Add to Cart Successful!')
    }

    return (
        <div className='mx-auto min-w-sm max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 md:px-0 pt-12'>
            <div className='grid grid-cols-2 grid-rows-1 gap-6'>
                <div className='col-span-2 md:col-span-1'>
                    <img src={displayProduct.images[1]} className='w-full h-auto ' alt="" />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <h1 className='text-3xl font-bold'>{displayProduct.name}</h1>
                    <p className='mt-2.5 bg-amber-700 text-amber-50 inline-block px-2.5 rounded pb-0.5 mb-3'>{displayProduct.rating} rating!</p>
                    <p className='text-xl mb-3'>${displayProduct.price}</p>
                    <p>{displayProduct.description}</p>
                    <button onClick={addToCartHandler} className='bg-gray-800 px-12 py-2 block text-amber-50 mt-5 hover:bg-gray-700 cursor-pointer'>
                        Checkout
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails