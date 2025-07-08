import React, { useContext } from 'react'
import { Link } from 'react-router'
import CartIcon from './carticon';
import { CartContextDispatch } from '../Features/Cart/CartContext';

function ProductItem({ product }) {
    const dispatch = useContext(CartContextDispatch)

    const addToCartHandler = () => {
        console.log(product);
        dispatch({ type: "ADD_PRODUCT", payload: product })
    }

    return (
        <div key={product.id} className="group relative">
            <Link to={`/proudcts/${product.id}`}>
                <img
                    alt={product.images[0]}
                    src={product.images[1]}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
            </Link>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.short_description}</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    <button onClick={addToCartHandler} className='bg-gray-700 cursor-pointer hover:bg-gray-600 px-4 py-1 text-white rounded mt-4'><CartIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem