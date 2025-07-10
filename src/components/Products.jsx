import React, { useState } from 'react'
import Filter from './Filter'
import { products } from '../products/products'
import ProductItem from './ProductItem';

function Products() {
    const [ourProduct, setOurProduct] = useState(products)

    const onFilterHandler = (value) => {
        let sortedProducts;
        if (value === 'low') {
            sortedProducts = [...ourProduct].sort((a, b) => a.price - b.price);
        } else if (value === 'heigh') {
            sortedProducts = [...ourProduct].sort((a, b) => b.price - a.price);
        }
        setOurProduct(sortedProducts);

    }

    return (<>

        <Filter onFilter={onFilterHandler} />
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h3>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-4 md:mx-0">

                    {
                        ourProduct.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>    </>
    )
}

export default Products