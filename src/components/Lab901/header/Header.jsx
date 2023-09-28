import React from 'react';
import ImgBg from '../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
export default function Header() {
   return (
      <>
         <header>
            <nav className="navbar">
               <div className="container ">
                  <h2 className="navBrand">ReactMeals</h2>
                  <HeaderCartButton></HeaderCartButton>
               </div>
            </nav>
            <img src={ImgBg} className="header-background" alt="Background" />
         </header>
      </>
   );
}
