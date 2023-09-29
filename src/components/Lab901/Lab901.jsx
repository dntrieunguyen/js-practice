import React, { useState } from 'react';
import Header from './header/Header';
import './Lab901.scss';
import MealItemForm from './main/MealItemForm';
import MealsSummary from './main/MealsSummary';
import { createPortal } from 'react-dom';
import Cart from './header/Cart';

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

export default function Lab901() {
   const [showModal, setShowModal] = useState(false);
   const onCloseModal = () => {
      setShowModal(false);
   };
   const onOpenModal = () => {
      setShowModal(true);
   };
   return (
      <>
         <div id="ModalCart">
            <Cart></Cart>
            {/* {showModal &&
               createPortal(
                  <Cart onCloseModal={onCloseModal}></Cart>,
                  document.getElementById('ModalCart'),
               )} */}
         </div>

         <Header></Header>
         <div className="meal-main">
            <MealsSummary></MealsSummary>
            <MealItemForm onOpenModal={onOpenModal} data={data}></MealItemForm>
         </div>
      </>
   );
}
