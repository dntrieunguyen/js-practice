import MealItem from './MealItem';

export default function MealItemForm({ data, setAmount, dispatch, addItems }) {
   return (
      <>
         <div className="container ">
            <div className="available-meal">
               {data.map(item => (
                  <div className="mealCard">
                     <MealItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                     ></MealItem>

                     <div className="mealCard__value">
                        <form action="">
                           <label>Amount</label>
                           <input
                              type="number"
                              min={0}
                              value={item.amount}
                              onChange={e => {
                                 dispatch(setAmount(item.id, e.target.value));
                              }}
                           />
                        </form>
                        <button
                           type="submit"
                           onClick={e => {
                              dispatch(addItems(item));
                           }}
                        >
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
