import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <nav className='bg-gray-800 text-shadow-fuchsia-200 '>
            <div className="container px-3 md:px-0 flex justify-between ml-auto mr-auto py-4">
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
                        Cart(0)
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar