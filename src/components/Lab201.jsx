import React from 'react';
import { format } from 'date-fns';

export default function Lab201() {
   const expenses = [
      {
         id: 'e1',
         title: 'Toilet Paper',
         amount: 94.12,
         date: new Date(2020, 7, 14),
      },
      {
         id: 'e2',
         title: 'New TV',
         amount: 799.49,
         date: new Date(2021, 2, 12),
      },
      {
         id: 'e3',
         title: 'Car Insurance',
         amount: 294.67,
         date: new Date(2021, 2, 28),
      },
      {
         id: 'e4',
         title: 'New Desk (Wooden)',
         amount: 450,
         date: new Date(2021, 5, 12),
      },
   ];

   return (
      <div className="myBackground">
         <div className="center">
            <div className="boxContent">
               {expenses.map(item => (
                  <div className="expenseItem" key={item.id}>
                     <div className="expenseItemDate">
                        <p className="expenseItemDateM">
                           {format(item.date, 'MM')}
                        </p>
                        <p className="expenseItemDateY">
                           {format(item.date, 'yyyy')}
                        </p>
                        <p className="expenseItemDateD">
                           {format(item.date, 'dd')}
                        </p>
                     </div>
                     <div className="expenseItemTitle">{item.title}</div>
                     <div className="expenseItemPrice">{`$${item.amount}`}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
