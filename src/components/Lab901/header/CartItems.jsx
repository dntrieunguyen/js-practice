import React from 'react';

export default function CartItems() {
   return (
      <>
         <div className="cartItems">
            <div className="cartItems__content">
               <div className="cartItems__content-title">Title</div>
               <div className="cartItems__content-price">$price</div>
            </div>
            <span className="cartItems__amount">x12</span>
            <div className="cartItems__button">
               <button className="cartItems__button--plus">+</button>
               <button className="cartItems__button--minus">-</button>
            </div>
         </div>
      </>
   );
}
