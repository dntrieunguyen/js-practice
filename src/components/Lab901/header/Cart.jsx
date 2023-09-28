import React from 'react';
import CartItems from './CartItems';

export default function Cart() {
   return (
      <>
         <div id="Cart" className="">
            <div className="mealCart">
               <CartItems></CartItems>

               <div className="CartTotal">
                  <div className="CartTotal__content">
                     <h2>Total Amount</h2>
                     <p>$total price</p>
                  </div>
                  <div className="CartTotal__btn">
                     <button>Close</button>
                     <button>Order</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
