import React from 'react';

const ErrorModal = ({ message, title, errorConfirm, handleErrorBtn }) => {
   return (
      <>
         <div className="errorModal">
            <div className="errorModal-content">
               <div className="errorModal__header">{title}</div>
               <div className="errorModal__text">{message}</div>
               <button className="errorModal__btn" onClick={handleErrorBtn}>
                  Okay
               </button>
            </div>
         </div>
      </>
   );
};

export default ErrorModal;
