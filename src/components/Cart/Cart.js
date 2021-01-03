import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total,prd) => total + prd.price  , 0)
    let total = 0;
    for(let i = 0; i< cart.length; i++)
    {
        const product = cart[i];
        total = total + product.price * product.quantity;
        
          
    }
    let shipping = 0;
    if(total > 35)
    {
        shipping = 0;
    }
    else if(total > 15)
    {
        shipping = 4.99;
    }
    else if(total > 0)
    {
        shipping = 12.99;
    }
    const tax =  (total/10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
       
    }
   

    return (
        <div className="cart">
            <h4 className="text-primary">Order Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product price : {formatNumber (total)}</p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p>Total Price: {grandTotal} </p>
            <br/>
            {
                props.children  //(review button) use korar jonno ba dakhanor jonno shop.js theke children hisabe akhane ana hoyce(shop.js) er peter modhe declear kora hoyece
            }
        </div>
    );
};

export default Cart;