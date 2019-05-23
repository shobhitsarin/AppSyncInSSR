import React from 'react';
import * as GQLQueries from '../service/Queries';
import gql from 'graphql-tag';
import AwsAppSyncClient from '../service/AwsAPI';

export const ProductList = ({ data = [] }) => {
  return (
    <React.Fragment>
      <h1>PLP AppSync Page</h1>
      <ul className="product-wrapper">
        {data &&
          data.map(item => (
            <li key={item.id} className="product-item">
              <p className="product-name">{item.product_name}</p>
              <p className="product-disc-price">{item.price}</p>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

const PlpAppSync = ({ data }) => (
  <React.Fragment>
    <div className="App">
      <ProductList data={data} />
    </div>
  </React.Fragment>
);

PlpAppSync.getInitialProps = async function({ renderPage, Component, ctx }) {
  const client = AwsAppSyncClient.getClient();
  const products = await client.query({
    query: gql(GQLQueries.getAllProducts)
  });
  const data =
    products &&
    products.data &&
    products.data.listProducts &&
    products.data.listProducts.items;
  return {
    data
  };
};

export default PlpAppSync;
