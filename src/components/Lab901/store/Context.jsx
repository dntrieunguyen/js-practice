import React, { useState, createContext } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
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
   const [showModal, setShowModal] = useState(false);

   const onCloseModal = () => {
      setShowModal(false);
   };

   const onOpenModal = () => {
      setShowModal(true);
   };

   const value = {
      data,
      showModal,
      setShowModal,
      onCloseModal,
      onOpenModal,
   };
   return (
      <>
         <Context.Provider value={value}>{children}</Context.Provider>
      </>
   );
}

export { ContextProvider, Context };
