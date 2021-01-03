import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} =props.product;
    //console.log(props.product);
    const reviewItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }
    return (
        <div style={reviewItemStyle} className='review-item'>
            <h4 className= 'product-name'>{name}</h4>
            
            <p>Quantity:{quantity}</p>
            <p><small>Price:$ {price} </small></p>
            <br/>
            <button 
            onClick= {() => props.removeProduct(key)} //akta erro function (() =>)use korci karon click korar age jeno function call na hoy .then jkhn click hobe tkhn remove hobe abong key dhore hobe
            className='main-button'
            >Remove</button>
        </div>
    );
};

export default ReviewItem;