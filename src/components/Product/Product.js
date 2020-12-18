import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props); //console kore data dakhar jonno (shop.js er sob data akhane dakhar jonno)
const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div className="all-product">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p>by :{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className="main-button" onClick= {() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add curt</button> 
                
                {/* akhane onclick er por arow function deya thn call korci karon (parameter pass hobe ) that means, click korar por product add hobe ,ja console e dakhte parbo...bt jdi arow function na deya call kortam tahole click korar age add hoye jayto karon () ata mane function call  */}
            </div>
            
        </div>
    );
};

export default Product;