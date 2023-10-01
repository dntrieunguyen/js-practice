import './Lab901.scss';
import Header from './header/Header';
import MealItemForm from './main/MealItemForm';
import MealsSummary from './main/MealsSummary';

import { ContextProvider } from './store/Context';

export default function Lab901() {
   return (
      <ContextProvider>
         <Header></Header>
         <div className="meal-main">
            <MealsSummary></MealsSummary>
            <MealItemForm></MealItemForm>
         </div>
      </ContextProvider>
   );
}
