
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
   
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        const savedCart = getDatabaseCart();// akhane sob object akare ace
        const productKeys = Object.keys(savedCart) // return hisave jotogulo product ace sobglor key dakhabe(object er modhe j keys ace segulor modhe sa)
        const previousCart = productKeys.map(existingKey =>{
        const product = fakeData.find(pd => pd.key === existingKey);
        product.quantity = savedCart[existingKey];   //kon product er kotota quantity sey valu deya debe
        return product;
        })
         setCart(previousCart)
    },[])


    const handleAddProduct = (product) =>{
        // const newCart = [...cart,product];
        // setCart(newCart)
        // const sameProduct = newCart.filter(pd => pd.key !== product.key); //akhane kaj kora hoyce ,akadhik product cart e add korar jonno loal storage e jate akta product akadhik bar click kora hole jate local storage e akadhik bar set hoy(countite amra bar bar change korte partaci and local storage e add korte parteci)
        // const count = sameProduct.length;
        // addToDatabaseCart(product.key,count)

        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey); 
        let count = 1;
        let newCart;
        if(sameProduct)
        {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others,sameProduct]; //akhane (newCart) ar vitor payce filter korar por others tak and tar pore bosay debo (sameProduct) jtar quantity amra payce

        }
        else{
            product.quantity = 1; //j product ta ami add korte chachi sey product er antity and tar value 1
            newCart = [...cart, product];
        }
        setCart(newCart)
        addToDatabaseCart(product.key,count)
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        key = {pd.key} // inspact er error ta cancel korar jonno
                        showAddToCart = {true} //react a conditional dom dakhar jonno ay line
                        handleAddProduct = {handleAddProduct}
                        product={pd}>

                        </Product> )
                }
            </div>
            <div className="cart-container">
                  <Cart cart={cart}>
                    <Link to = '/review'>
                        <button className="main-button">Review Order</button>
                    </Link>
                  </Cart>
            </div>
           
        </div>
    );
};

export default Shop;