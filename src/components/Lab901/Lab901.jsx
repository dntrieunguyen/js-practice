import React, { useReducer } from 'react';

// Bước 1: Khai báo trạng thái ban đầu của giỏ hàng
const initialState = {
   cartItems: [],
};

// Bước 2: Khai báo các hành động dưới dạng biến để tránh lỗi chính tả và tăng đọc được code
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Bước 3: Reducer function xử lý các hành động và cập nhật trạng thái của giỏ hàng
function reducer(state, action) {
   switch (action.type) {
      case ADD_TO_CART:
         // Thêm sản phẩm vào giỏ hàng bằng cách trả về một trạng thái mới
         return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
         };
      case REMOVE_FROM_CART:
         // Xóa sản phẩm khỏi giỏ hàng bằng cách lọc các sản phẩm có ID khác với sản phẩm cần xóa
         return {
            ...state,
            cartItems: state.cartItems.filter(
               item => item.id !== action.payload.id,
            ),
         };
      case UPDATE_QUANTITY:
         // Cập nhật số lượng sản phẩm trong giỏ hàng bằng cách tìm và thay đổi số lượng của sản phẩm có cùng ID
         return {
            ...state,
            cartItems: state.cartItems.map(item => {
               if (item.id === action.payload.id) {
                  return {
                     ...item,
                     quantity: action.payload.quantity,
                  };
               }
               return item;
            }),
         };
      default:
         return state;
   }
}

// Bước 4: Sử dụng useReducer để khởi tạo state và dispatch function
const [state, dispatch] = useReducer(reducer, initialState);

// Bước 5: Sử dụng state và dispatch trong ứng dụng của bạn

// Ví dụ sử dụng dispatch để thực hiện hành động "ADD_TO_CART"
const addToCart = product => {
   dispatch({
      type: ADD_TO_CART,
      payload: product,
   });
};

// Ví dụ sử dụng dispatch để thực hiện hành động "REMOVE_FROM_CART"
const removeFromCart = product => {
   dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
   });
};

// Ví dụ sử dụng dispatch để thực hiện hành động "UPDATE_QUANTITY"
const updateQuantity = (product, quantity) => {
   dispatch({
      type: UPDATE_QUANTITY,
      payload: {
         id: product.id,
         quantity: quantity,
      },
   });
};

// ...

// Sử dụng các hàm addToCart, removeFromCart, updateQuantity trong ứng dụng của bạn để thực hiện các hành động trên giỏ hàng

return (
   <div>
      {/* Giao diện và logic của ứng dụng */}
      <h1>Giỏ hàng</h1>
      <ul>
         {state.cartItems.map(item => (
            <li key={item.id}>
               <span>{item.name}</span>
               <span>{item.quantity}</span>
               <button onClick={() => removeFromCart(item)}>Xóa</button>
            </li>
         ))}
      </ul>
      <button
         onClick={() => addToCart({ id: 1, name: 'Sản phẩm 1', quantity: 1 })}
      >
         Thêm vào giỏ hàng
      </button>
   </div>
);
