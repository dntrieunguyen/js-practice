import React from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';

export default function Lab15() {
   return (
      <>
         <Provider>
            <Counter></Counter>
         </Provider>
      </>
   );
}
