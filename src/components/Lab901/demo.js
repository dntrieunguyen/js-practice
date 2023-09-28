import React, { useReducer } from 'react';

// Bước 1: Khai báo trạng thái ban đầu của giỏ hàng
const initialState = {
  cartItems: []
};

// Bước 2: Định nghĩa reducer function để xử lý các hành động và cập nhật trạng thái
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Thêm sản phẩm vào giỏ hàng bằng cách trả về một trạng thái mới
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case 'REMOVE_FROM_CART':
      // Xóa sản phẩm khỏi giỏ hàng bằng cách lọc các sản phẩm có ID khác với sản phẩm cần xóa
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case 'UPDATE_QUANTITY':
      // Cập nhật số lượng sản phẩm trong giỏ hàng bằng cách tìm và thay đổi số lượng của sản phẩm có cùng ID
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
}

function ShoppingCart() {
  // Bước 3: Sử dụng useReducer để quản lý trạng thái của giỏ hàng
  const [state, dispatch] = useReducer(reducer, initialState);

  // Bước 4: Định nghĩa các hàm xử lý hành động và gửi đi thông qua dispatch
  const addToCart = (product) => {
    // Gửi hành động 'ADD_TO_CART' bằng cách gọi dispatch và truyền dữ liệu sản phẩm
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    // Gửi hành động 'REMOVE_FROM_CART' bằng cách gọi dispatch và truyền dữ liệu sản phẩm
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const updateQuantity = (product, quantity) => {
    // Gửi hành động 'UPDATE_QUANTITY' bằng cách gọi dispatch và truyền dữ liệu sản phẩm và số lượng
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity } });
  };

  // Giao diện của thành phần ShoppingCart
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: 'Product 1', quantity: 1 })}>Add Product 1</button>
      <button onClick={() => addToCart({ id: 2, name: 'Product 2', quantity: 1 })}>Add Product 2</button>
    </div>
  );
}