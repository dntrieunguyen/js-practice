import './Lab901.scss';
import Header from './header/Header';
import MealItemForm from './main/MealItemForm';
import MealsSummary from './main/MealsSummary';

import { ContextProvider } from './store/Context';
import { useReducer } from 'react';

const data = [
   {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
   },
   {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
   },
   {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
   },
   {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
   },
];

// Thêm key-value amount
const cartItems = data.map(item => ({ ...item, amount: 0 }));

// tạo initState
const cartState = {
   item: cartItems,
   modalItem: [],
   totalAmount: 0,
};

// Action
const UPDATE_ITEMS = 'update_items';
const DEL_ITEMS = 'delete_items';
const SET_AMOUNT = 'set_amount';

const setAmount = (itemId, amount) => {
   return {
      type: SET_AMOUNT,
      payload: { itemId, amount },
   };
};

const updateItems = payload => {
   return {
      type: UPDATE_ITEMS,
      payload,
   };
};

// reduce

const reducer = (state, action) => {
   // console.log('Action >>>', action);
   // console.log('PREV state >>>', state);

   switch (action.type) {
      case SET_AMOUNT:
         const { itemId, amount } = action.payload;

         // Tạo 1 biến cập nhật item tương ứng theo ID
         const updatedItems = state.item.map(item => {
            if (item.id === itemId) {
               return { ...item, amount: parseInt(amount) };
            }
            return item;
         });

         // Trả về item được cập nhật bằng updatedItems và totalAmount
         return { ...state, item: updatedItems };

      case UPDATE_ITEMS:
         // Tính totalAmount
         const totalAmount = state.item.reduce(
            (total, item) => total + item.amount,
            0,
         );

         // Tạo biến mới cho payload
         const payload = action.payload;

         // Tạo biến mới cho modalItem
         let updatedModalItems = state.modalItem;

         // Kiểm tra nếu payload đã tồn tại trong mảng
         const isExisting = updatedModalItems.findIndex(
            item => item.id === payload.id,
         );

         // Nếu thêm payload vào modalItem, nếu payload tồn tại thì cập nhật modalItem
         if (payload.amount >= 0) {
            if (isExisting === -1) {
               updatedModalItems.push(payload);
            } else {
               updatedModalItems = updatedModalItems.map(item =>
                  item.id === payload.id ? payload : item,
               );
            }
         }

         console.log('Updated Modal Items >>>', updatedModalItems);
         return { ...state, totalAmount, modalItem: updatedModalItems };

      default:
         throw Error;
   }
};

export default function Lab901() {
   // dispatch
   const [state, dispatch] = useReducer(reducer, cartState);
   console.log('new state >>>', state);
   // console.log(state.modalItem.length);

   return (
      <ContextProvider>
         <Header cartState={state}></Header>
         <div className="meal-main">
            <MealsSummary></MealsSummary>
            <MealItemForm
               data={state.item}
               dispatch={dispatch}
               setAmount={setAmount}
               addItems={updateItems}
            ></MealItemForm>
         </div>
      </ContextProvider>
   );
}
