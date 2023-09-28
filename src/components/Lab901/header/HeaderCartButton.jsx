import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function HeaderCartButton() {
   return (
      <>
         <div className="headerCard ">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Your Cart</p>
            <p className="CardItem">2</p>
         </div>
      </>
   );
}
