import React, { useEffect, useRef, useState } from 'react'

import { products } from '../products/products'
import ProductItem from './ProductItem';
import Filter from './filter';

function Products() {
    const [ourProduct, setOurProduct] = useState(products)
    const [search, setSearch] = useState('')
    const searchInputRef = useRef()
    const [displayedProducts, setDisplayedProducts] = useState([]);



    const onFilterHandler = (value) => {
        let sortedProducts;
        if (value === 'low') {
            sortedProducts = [...ourProduct].sort((a, b) => a.price - b.price);
        } else if (value === 'heigh') {
            sortedProducts = [...ourProduct].sort((a, b) => b.price - a.price);
        }
        setOurProduct(sortedProducts);

    }


    const searchInputhandler = (e) => {
        setSearch(e.target.value)
        console.log(search);

    }



    useEffect(() => {
        const performSearch = () => {
            let filteredResult;
            if (search === '') {
                // If search query is empty, show all original products
                filteredResult = ourProduct;
            } else {
                // Filter based on name or description (case-insensitive)
                const lowerCaseSearch = search.toLowerCase();
                filteredResult = ourProduct.filter(product =>
                    product.name.toLowerCase().includes(lowerCaseSearch) ||
                    product.description.toLowerCase().includes(lowerCaseSearch)
                );
            }
            // Update the state with the filtered products
            setDisplayedProducts(filteredResult);
        };

        // Set a timeout to delay the search (debouncing)
        // Correct variable name for the timeout ID
        const timerId = setTimeout(() => {
            performSearch();
        }, 500); // Debounce for 500ms (adjust as needed)

        // Cleanup function for the useEffect
        // This will clear the previous timeout if 'search' changes before the timeout fires,
        // or when the component unmounts.
        return () => {
            clearTimeout(timerId);
        };

    }, [ourProduct, search])



    return (<>
        <div className='text-center px-4 md:px-0'>
            <input className='text-center inline-block  w-full md:-w-1/2 lg:w-1/3 py-2 rounded  mt-5 border' ref={searchInputRef} value={search} onChange={searchInputhandler} type="text" name="search" id="" placeholder='Search Products' />
        </div>
        <Filter onFilter={onFilterHandler} />
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h3>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-4 md:mx-0">

                    {
                        displayedProducts.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>    </>
    )
}

export default Products