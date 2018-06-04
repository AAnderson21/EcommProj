import React from 'react';
import product from './product';
import './productList.css';

export const Products = (props) => {
  return (
    <div className="Products">
      {props.product.map((product => {
        return (
            <div>
              <h4>{product.first_name} {product.last_name}</h4>
              <div className="product-Email">{product.email}</div>
            </div>
          )
      }))}
    </div>
  )
};

export default Products;