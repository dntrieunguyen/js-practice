import MealItem from './MealItem';

export default function MealItemForm({ data, onOpenModal }) {
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
