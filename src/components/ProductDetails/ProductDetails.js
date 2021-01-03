import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams() //akhane hook use kora hoyece useParams ,jar karone dynamic product key read korte partaci
    const product = fakeData.find(pd => pd.key ===productKey);
    console.log(product);
    return (
        <div className='product-container'>
            {/* <h1> {productKey} comming soon details</h1> */}
            <Product showAddToCart = {false} // react a conditional dom dakhar jonno ay line  2 jatga theke parametar pass korci .ay jayga r (shop.js) deya 
             product = {product}></Product>
        </div>
    );
};

export default ProductDetails;