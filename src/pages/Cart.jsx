import React, { useContext } from 'react'
import { Link } from 'react-router'
import { CartContext, CartContextDispatch } from '../Features/Cart/CartContext'

function Cart() {
    const cart = useContext(CartContext)
    const dispatch = useContext(CartContextDispatch)
    console.log(cart);

    const incriseHandler = (product) => {
        dispatch({ type: "ADD_PRODUCT", payload: product })
    }
    const decriseHandler = (product) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: product })
    }
    const deleteHandler = (product) => {
        dispatch({ type: "DELETE_PRODUCT", payload: product })
    }

    return (
        <div className='mx-auto min-w-sm max-w-2xl  sm:px-6 lg:max-w-7xl lg:px-8 md:px-0'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold my-5'>Cart</h1>
                <Link to={-1} className='bg-gray-700 px-4 py-2 text-white'>GO back</Link>
            </div>

            <div className="md:grid px-4 w-full md:grid-cols-9 grid-rows-1 gap-4 mt-12">
                <div className=" md:col-span-6 grid gap-2">
                    <div className='grid grid-cols-7 grid-rows-1 gap-2 [&>*]:ml-9'>
                        <p className='col-span-3'>Product Details</p>
                        <p className='flex justify-center'>Count</p>
                        <p className='flex justify-end'>Price</p>
                        <p className='flex justify-end'>Total</p>

                    </div>
                    {cart.cart.map(product => (

                        <div key={product.id} className="grid grid-cols-3 md:grid-cols-7 grid-row-2 md:grid-rows-1 gap-2 border border-gray-200 rounded-lg h-full md:h-20 items-center">
                            <div className='p-1.5 '>
                                <img src={product.images[0]} alt={product.images[1]} className='aspect-square w-16' />
                            </div>
                            <div className="col-span-2">
                                <div className=' flex text-left flex-col'>
                                    <p className='text-left'>{product.name}</p>
                                </div>
                            </div>
                            <div className="row-start-2 md:row-start-1 md:col-start-4 flex justify-end">
                                <button className='text-4xl px-1 hover:bg-gray-200 cursor-pointer' onClick={() => decriseHandler(product)}>-</button>
                                <p className='border px-2 pt-1.5 text-sm'>{product.totalItem}</p>
                                <button className='text-4xl  px-1 hover:bg-gray-200 cursor-pointer' onClick={() => incriseHandler(product)}>+</button>
                            </div>
                            <div className="row-start-2 md:row-start-1 md:col-start-5 flex justify-end">${product.price}</div>
                            <div className="row-start-2 md:row-start-1 md:col-start-6 flex justify-end">${Number(product.price * product.totalItem).toFixed(2)}</div>
                            <div className="row-start-2 md:row-start-1 md:col-start-7 flex justify-center"><svg onClick={() => deleteHandler(product)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer  hover:bg-gray-200" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></div>
                        </div>
                    ))}
                </div>
                <div className=" md:col-span-3 w-full col-start-7 mt-8">
                    <div className=' border border-gray-200 rounded-lg p-4 '>
                        <div className='flex justify-between mt-2'>
                            <h1 className='text-xl font-bold mb-1'>Total:</h1>
                            <p className='text-xl'>${Number(cart.totalPrice + 99).toFixed(2)}</p>
                        </div>
                        <hr className='border-gray-200' />
                        <div className='flex justify-between mt-4'>
                            <p>Sub-total:</p>
                            <p>${Number(cart.totalPrice).toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <p>Delivary:</p>
                            <p>$99</p>
                        </div>
                        <div>
                            <button className='bg-gray-800 px-3 py-2 block w-full text-amber-50 mt-5 hover:bg-gray-700 cursor-pointer'>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart