import React from 'react';
import {
    Text,
    FlatList,
    Image,
    View,
} from 'react-native';

const ProductTile = ({item}) => {
    const url = "https://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/products/500/"+item.imagename+"-6.jpg";
    const pic = {
        uri: url
    };
    return(
        <View key={item.id} className="product-item">
         <Text className="product-name"> Fetching from core</Text>
                <Text className="product-name">
                    {item.product_name}
                </Text>
                <Text className="product-disc-price">
                    {item.price}
                </Text>
        </View>
    )
}

export const ProductList = ({data}) => {
    return(
        <React.Fragment>
            <Text>PLP AppSync Page</Text>
            <FlatList className="product-wrapper"
                      data={data}
                      renderItem={ProductTile}>
            </FlatList>
        </React.Fragment>
    )
}