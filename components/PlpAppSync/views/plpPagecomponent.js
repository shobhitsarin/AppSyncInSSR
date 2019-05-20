import React from 'react';
import * as GQLQueries from '../../../service/Queries'
import gql from 'graphql-tag';
import { ProductList } from "./productListComponent";
import AwsAppSyncClient from '../../../service/AwsAPI'


const ProductContainer = ({data}) => (
    <React.Fragment>      
    <div className="App">
    <ProductList data={data}/>
    </div>
    </React.Fragment>);

ProductContainer.getInitialProps = async function ({ renderPage, Component, ctx }) {
  console.log("---------------------->>>")
  const client = AwsAppSyncClient.getClient();
    const data = await client.query({
      query: gql(GQLQueries.getAllProducts)
    });
    return {
      data
    };
}

export default ProductContainer;

