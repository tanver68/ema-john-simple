import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props); //console kore data dakhar jonno (shop.js er sob data akhane dakhar jonno)
    //console.log(props);
const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div className="all-product">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p>by :{seller}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                { props.showAddToCart && <button className="main-button" onClick= {() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add curt</button> }

                {/* react e conditional dom dakhar jonno ay line gulo (akhane condition kora hoyce ) */}
                
                {/* akhane onclick er por arow function deya thn call korci karon (parameter pass hobe ) that means, click korar por product add hobe ,ja console e dakhte parbo...bt jdi arow function na deya call kortam tahole click korar age add hoye jayto karon () ata mane function call  */}
            </div>
            
        </div>
    );
};

export default Product;