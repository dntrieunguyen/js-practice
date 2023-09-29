import { useContext } from 'react';
import CartItems from './CartItems';
import { Context } from '../store/Context';

export default function Cart() {
   const context = useContext(Context);

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
                     <button onClick={context.onCloseModal}>Close</button>
                     <button>Order</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
