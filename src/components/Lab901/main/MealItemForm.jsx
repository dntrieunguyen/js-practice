import React from 'react';
import MealItem from './MealItem';

export default function MealItemForm({ data }) {
   return (
      <>
         <div className="container ">
            <div className="available-meal">
               {data.map(data => (
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
                           <input type="number" name="" id="" disabled />
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
