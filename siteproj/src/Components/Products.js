import React from 'react';
import product from '../data/productList';


export const ProductItem = (props) => {
  return (
    <div className="Products">
      {props.product.map((product => {
        return (
          <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lápiz</h5>
                <img
                  height={100}
                  src={product.image}/>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="card-text">{product.description}</div>
                <div className="card-text">$ {product.price}</div>
                <a to="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
          )
      }))}
    </div>
  )
};

export default Products;