import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';
import happyImage from '../../images/giphy.gif';

const Review = () => {
   
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false); //place order e click korle jate amra akta image dakhte pay tar jonno akta state dclear korlam
    const handlePlaceOrder = () =>
    {
        setCart([]);   // web site theke order er data clean hoye jabe
        setOrderPlaced(true); //ay state er value ta true hoye jabe jkhn ay state er valutak amra set kore delam . akhn atak amra use kore onek kichu dakhate pari jmon image dakhabo happyimage
        processOrder(); //local storage browser database theke data clean hoye jabe jgulo order kora hoyece
    } 

    const removeProduct = (productKey) => {
        //console.log('remove cliked',productKey);
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }// {akhane akta event handler use kora hoyece remove button er jonno .(pd mane cart er vitor filter hoye protita product er name pd dhora hoyece ) ...and akhane (productKey) bade sob gulok filter ba select kora hoyece .thn (setcart) e set kore delam .thn(removeFromDatabaseCart) atar madhome database theke key tak remove korre delam ,page reload dela jate abar na ase}

    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();                    // akhane sob object akare ace
        const productKeys = Object.keys(savedCart)              // return hisave jotogulo product ace sobglor key dakhabe(object er modhe j keys ace segulor modhe sa)
            const cartProducts = productKeys.map(key =>{
             const product = fakeData.find(pd => pd.key === key);
             product.quantity = savedCart[key];   //kon product er kotota quantity sey valu deya debe
             return product;
        } ); 
         // kotogulo product key ace ta mapping kore naowa hoyece,2nd line e (protita key jodi product key er same hoy tahole fake data theke find hobe product ta)
        
         setCart(cartProducts);


    } ,[]);
        
         let thankyou;
         if(orderPlaced)
         {
             thankyou = <img src={happyImage} alt=""/>
         }

    return (
        <div  className='twin-container'>

            <div className='product-container'>
                {/* <h1>Cart Items : {cart.length}</h1>  jotogulo item ace sob gulor length paowa jabe */}
                {
                    cart.map(pd => <ReviewItem key={pd.key}
                        removeProduct={removeProduct} //review item e akta proparty pass kortaci
                        product = {pd}
                        >

                    </ReviewItem> ) //sob item paowar jonno ay line likhci:(akhane cart jta ace setak loop thru korlam abong protekta elemnt k boltaci pd hobe. abong ar jonno hoche reviewitem hobe ,hoilo abong pass korbo product and tar value ta hobe ay pd)
                }

                
                {
                    thankyou //place order e click korle image ta akhane show kortace
                }
            </div>
           
            <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to = '/review'>
                            <button onClick={handlePlaceOrder} //jehetu parameter pass kora lagbe na tay erow function(() =>) declear korlam na
                            className="main-button">Place Order</button>
                        </Link>
                    </Cart>
            </div>
            
        </div>
    );
};

export default Review;