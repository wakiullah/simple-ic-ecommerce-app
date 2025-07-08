import React, { useContext } from 'react'
import { Link } from 'react-router'
import { CartContext } from '../Features/Cart/CartContext'

function Navbar() {
    const cart = useContext(CartContext)

    return (
        <nav className='bg-gray-800 text-shadow-fuchsia-200  sticky top-0 z-50'>
            <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 md:px-0 flex justify-between ml-auto mr-auto py-4">
                <div className='flex align-center'>
                    <Link to='/' className=' text-2xl mb-0'>
                        <h2 className='text-shadow-fuchsia-200 tracking-wide'>Cartzie</h2></Link>
                </div>
                <div className='flex gap-1 md:gap-7'>
                    <Link to={'/'} className='text-white nav_link'>Home</Link>
                    <Link to={'/about'} className='text-white nav_link'>About</Link>
                </div>
                <div className='flex align-center'>
                    <Link to={'/cart'} className='text-white nav_link'>
                        {`Cart(${cart.totalProducts})`}
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar