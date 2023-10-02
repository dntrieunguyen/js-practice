import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { Context } from '../store/Context';
import Cart from '../header/Cart';
export default function HeaderCartButton({ cartState }) {
   const context = useContext(Context);
   const onOpenModal = context.onOpenModal;

   return (
      <>
         {context.showModal &&
            createPortal(
               <Cart cartState={cartState}></Cart>,
               document.getElementById('ModalCart'),
            )}
         <div className="headerCard " onClick={onOpenModal}>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Your Cart</p>
            <p className="CardItem">{cartState.totalAmount}</p>
         </div>
      </>
   );
}
