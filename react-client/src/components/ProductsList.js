import ProductDetails from './ProductDetails.js'
import React,  { useState, useEffect } from 'react'
import axios from 'axios'

const ProductsList = (props) => {
    const [ data,setData ] = useState([])
    useEffect(() => {
    axios.get('http://localhost:5000/api/products')
        .then(response => {
        setData(response.data);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        console.log('Axios error details:', error.response);
        });
    }, [data]);

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