import CartItems from './CartItems';

export default function Cart({ onCloseModal }) {
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
                     <button onClick={onCloseModal}>Close</button>
                     <button>Order</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
