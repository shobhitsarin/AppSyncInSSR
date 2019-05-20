import React from 'react';

export const ProductList = ({data}) => {
    return(
        <React.Fragment>
        <h1>PLP AppSync Page</h1>
        <ul className="product-wrapper">
          {
            data && data.map(item => (
              <li key={item.id} className="product-item">
                <p className="product-name">
                  {item.product_name}
                </p>
                <p className="product-disc-price">
                  {item.price}
                </p>
              </li>
          ))
          }
        </ul>
        </React.Fragment>
    )
}