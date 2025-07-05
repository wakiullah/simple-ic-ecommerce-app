import React from 'react'
import { useParams } from 'react-router'
function ProductDetails() {
    const params = useParams()
    console.log(params.pid);


    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails