import React from 'react'
import bgImage from '../assets/hero.jpg'
function Hero() {
    return (
        <section className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container grid grid-cols-2 h-full">
                <div>
                </div>
                <div className='flex items-center h-full'>
                    <div className='gap-3 '>
                        <h1 className='text-5xl'>IT SPACE</h1>
                        <p className='my-5 mt-3 text-xl'>Your all degital solutions here.</p>
                        <button className='bg-gray-800 px-4 py-3 text-white cursor-pointer'>
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero