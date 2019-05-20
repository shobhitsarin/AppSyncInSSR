import gql from 'graphql-tag';




export const getItemsFromCMS = `query getItemsFromCMS {
  getCMSData {
    	title 
  }
}`;


export const getProductsAndCMSData = `query getProductsAndCMSData {
  getProductsCMS {
    	products {
        id:uniqueId
        product_name
        price:max_list_price
      }
    CMS {
      title
      article
    }
}
  }`;

export const getAllProductsFromUnbxd = `query getAllProductsFromUnbxd {
  getProducts {
    	prodpartno
      product_name
  }
}`;

export const getAllProducts = `query getAllProducts {
  listProducts {
    items {
      id
      product_name
      color
      price
      l2Category {
  
    title
          l1Category 

      {
          title
          }
        }
  }

}
  }`;
  


export const getAllItemsByL1 = `query getAllItemsByL1 {
listL1Categorys {
items {
title
l2Category {
  items {
    title
    products {
      items {
        product_name
        color
        price
      }
    }
  }
}  
}
}
}`

export const createUser = `mutation createUser {  
createUser(input: {
title: "TCP"
}) {
id
}
}`

export const UpdateProductPrice = `mutation UpdateProductPrice {
  updateProduct(input: {
      id:"0bd5048b-6491-4f26-aa2e-3c04dda7265d"
      price:"$73"
  }) {
      id
      product_name
      color
      price
      l2Category {
  
    title
          l1Category 

      {
          title
          }
  }
          
  }
}`






export const UpdateProductName = `mutation UpdateProductName {
  updateProduct(input: {
      id:"9a8c3c0c-e71c-400b-b7e4-013b45c658c1"
      product_name:"Clutch Bag For Women"
  }) {
      id
      product_name
      color
      price
      l2Category {
  
    title
          l1Category 

      {
          title
          }
  }
          
  }
}`



export const createL2Category = `mutation createL2Category {
createL2Category(input: {
title: "Bag",
l1Category:"6e550db7-767a-4b9e-82d2-3d685a63482c"
}) {
    id
}
}`

export const createProduct = `mutation createProduct {
createProduct(input: {
  product_name: "Sling Pack",
  product_short_description: "Party accessory for you",
  price: "$35",
 color: "Grey",
 list_of_attributes: "isBossEnabled=1",
 isActive:true,
 productL2CategoryId:"6e550db7-767a-4b9e-82d2-3d685a63482c"
}) {
    id
}
}`

export const getProductsInList = `query getProductsInList {
  getProductsInList {
      id
      product_name
      color
      price
      l2Category {
  
    title
          l1Category 

      {
          title
          }
  }
      }
  }`;

//PTR:  Removed gql  from this 
export const DeltaSubscription =`subscription Subscription {
  onDeltaProduct {
    aws_ds
    id
    product_name
    product_short_description
    price
    color
    list_of_attributes
    l2Category {
      id
      title
      l1Category {
        id
        title
      }
    }
  }
}`;

export const listDeltaProducts = gql`query Delta($lastSync: AWSTimestamp!) {
  listProductsDelta(
    lastSync: $lastSync
  ) {
    
    id
    product_name
    color
    price
    l2Category {

  title
        l1Category 

    {
        title
        }
}
  }
}`;

export const BaseQuery = gql`query Base {
  listPosts {
    id
    title
    author
    content
  }
}`;

export const Subscription = gql`subscription Subscription {
  onDeltaPost {
    id
    title
    author
    content
  }
}`;

export const DeltaSync = gql`query Delta($lastSync: AWSTimestamp!) {
  listPostsDelta(
    lastSync: $lastSync
  ) {
    id
    title
    author
    content
    aws_ds
  }
}`





