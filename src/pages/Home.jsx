import React from 'react'
import Hero from '../components/Hero'
import Filter from '../components/filter';
import Products from '../components/Products';
import { CartContext } from '../Features/Cart/CartContext';

function Home() {
    return (
        <>
            <Hero />
            <Products />
        </>
    )
}

export default Home;