import { useContext } from 'react';
import MealItem from './MealItem';
import { Context } from '../store/Context';

export default function MealItemForm() {
   const context = useContext(Context);

   return (
      <>
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
                           <input type="number" min={0} placeholder="1" />
                        </form>
                        <button type="submit">+ Add</button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
