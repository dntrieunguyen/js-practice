import React from 'react';

export default function MealItemForm() {
   return (
      <>
         <div className="mealCard__value">
            <form action="">
               <label htmlFor="">Amount</label>
               <input type="number" name="" id="" />
            </form>
            <button type="submit">+ Add</button>
         </div>
      </>
   );
}
