import { Link } from "react-router"


export default function NotFoundProduct() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-6xl font-bold text-yellow-500 mb-2">Product Not Found</h1>
            <h3 className="text-xl text-gray-800 mb-4">We couldn't find the product you're looking for.</h3>
            <p className="text-gray-700 mb-8">
                It may have been removed or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Back to Homepage
            </Link>
        </div>
    )
}