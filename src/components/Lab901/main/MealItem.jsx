import React from 'react';
// { name, description, price }
export default function MealItem({ name, description, price }) {
   return (
      <>
         <div className="mealCard__content">
            <div className="mealCard__content--title">{name}</div>
            <p className="mealCard__content--text">{description}</p>
            <p className="mealCard__content--price">${price}</p>
         </div>
      </>
   );
}
