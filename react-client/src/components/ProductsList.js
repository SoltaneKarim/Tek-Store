import React from 'react';
import data from "../data.json";
import ProductDetails from './ProductDetails.js'

const ProductsList = (props) => {
    return (
        <div>
        <div className='products-list'>
           {data.map((element,key) =>(
            <ProductDetails key={key} element={element}/>
           ))}
        </div>
        </div>
    )
}

export default ProductsList