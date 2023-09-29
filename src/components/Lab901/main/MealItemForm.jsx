import { useContext } from 'react';
import MealItem from './MealItem';
import { Context } from '../store/Context';
import { createPortal } from 'react-dom';
import Cart from '../header/Cart';

export default function MealItemForm() {
   const context = useContext(Context);
   const onOpenModal = context.onOpenModal;
   return (
      <>
         {context.showModal &&
            createPortal(<Cart></Cart>, document.getElementById('ModalCart'))}
         <div className="container ">
            <div className="available-meal">
               {context.data.map(data => (
                  <div className="mealCard">
                     <MealItem
                        key={data.id}
                        name={data.name}
                        description={data.description}
                        price={data.price}
                     ></MealItem>

                     <div className="mealCard__value">
                        <form action="">
                           <label htmlFor="">Amount</label>
                           <input type="number" disabled />
                        </form>
                        <button type="submit" onClick={onOpenModal}>
                           + Add
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
