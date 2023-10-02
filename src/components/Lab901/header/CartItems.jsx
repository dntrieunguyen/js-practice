import React from 'react';

export default function CartItems(props) {
   return (
      <>
         <div className="cartItems">
            <div className="cartItems__content">
               <div className="cartItems__content-title">{props.name}</div>
               <div className="cartItems__content-price">${props.price}</div>
            </div>
            <span className="cartItems__amount">x{props.amount}</span>
            <div className="cartItems__button">
               <button className="cartItems__button--plus">+</button>
               <button className="cartItems__button--minus">-</button>
            </div>
         </div>
      </>
   );
}
