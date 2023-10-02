import { useContext } from 'react';
import CartItems from './CartItems';
import { Context } from '../store/Context';

export default function Cart({ cartState }) {
   const context = useContext(Context);
   const data = cartState.modalItem.filter(item => item.amount > 0);
   const totalPrice = data
      .reduce((total, item) => {
         return (total =
            parseFloat(total) +
            parseFloat(item.price) * parseFloat(item.amount));
      }, 0)
      .toFixed(2);

   const handOrder = () => {
      alert(`Your bill is: $${totalPrice}`);
   };
   return (
      <>
         <div id="Cart" className="">
            <div className="mealCart">
               {data.map(item => (
                  <CartItems
                     key={item.id}
                     name={item.name}
                     price={item.price}
                     amount={item.amount}
                  />
               ))}
               <div className="CartTotal">
                  <div className="CartTotal__content">
                     <h2>Total Amount</h2>
                     <p>${totalPrice}</p>
                  </div>
                  <div className="CartTotal__btn">
                     <button onClick={context.onCloseModal}>Close</button>
                     <button onClick={handOrder}>Order</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
