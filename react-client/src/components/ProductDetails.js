import React from 'react'

const ProductDetails = (props) => {
 
      return (
        <div className="product-details">
          <div className="product-image">
            <img src={props.element.imageUrl} />
          </div>
          <div className="product-info">
            <h1>{props.element.name}</h1>
            <p>{props.element.description}</p>
            <h2>Price : {props.element.price}</h2>
            <button>Add to Cart</button>
          </div>
        </div>
      );
}

export default ProductDetails