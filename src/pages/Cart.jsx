import React from 'react'
import { Link } from 'react-router'
import { products } from '../products/products'

function Cart() {

    return (
        <div className='mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 md:px-0'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold my-5'>Cart</h1>
                <Link to={-2} className='bg-gray-700 px-4 py-2 text-white'>GO back</Link>
            </div>

            <div className="grid grid-cols-9 grid-rows-1 gap-4 mt-12">
                <div className="col-span-6 grid gap-2">
                    <div className='grid grid-cols-7 grid-rows-1 gap-2 [&>*]:ml-9'>
                        <p className='col-span-3'>Product Details</p>
                        <p className='flex justify-center'>name</p>
                        <p className='flex justify-end'>name</p>
                        <p className='flex justify-end'>name</p>

                    </div>
                    {products.map(product => (
                        <div key={product.id} className="grid grid-cols-7 grid-rows-1 gap-2 border border-gray-200 rounded-lg h-20 items-center">
                            <div className='p-1.5 '>
                                <img src={product.images[0]} alt={product.images[1]} className='aspect-square w-16' />
                            </div>
                            <div className="col-span-2">
                                <div className=' flex text-left flex-col'>
                                    <p className='text-left'>{product.name}</p>
                                </div>
                            </div>
                            <div className="col-start-4 flex justify-end">
                                <button className='text-4xl'>-</button>
                                <p className='border p-1 text-sm'>01</p>
                                <button className='text-4xl'>+</button>
                            </div>
                            <div className="col-start-5 flex justify-end">$300</div>
                            <div className="col-start-6 flex justify-end">$dfas</div>
                            <div className="col-start-7 flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg></div>
                        </div>
                    ))}
                </div>
                <div className="col-span-3 col-start-7">
                    <div className='bg-gray-300'>
                        to kal lsdf
                        asdfjkasd
                        <h3>fasdjfklsad</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart