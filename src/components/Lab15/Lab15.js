import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

export default function Lab15() {
   const store = createStore();
   return (
      <>
         <Provider store={store}>
            <Counter></Counter>
         </Provider>
      </>
   );
}
