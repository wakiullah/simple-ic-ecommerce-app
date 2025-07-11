import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-7xl font-bold text-red-500 mb-2">404</h1>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h3>
            <p className="text-gray-500 mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to={"/"}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go to Homepage
            </Link>
        </div>
    )
}

export default NotFound