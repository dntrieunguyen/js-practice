import React from 'react';

const UserForm = ({ handleFormSubmit, usernameInput, ageInput }) => {
   return (
      <>
         <div className="formInput">
            <form>
               <label htmlFor="username" className="formInput__label">
                  Username
               </label>
               <input
                  type="text"
                  className="formInput__field"
                  name="username"
                  ref={usernameInput}
               />

               <label htmlFor="age" className="formInput__label">
                  Age (Years)
               </label>
               <input
                  type="text"
                  className="formInput__field"
                  name="age"
                  ref={ageInput}
               />

               <button
                  type="submit"
                  className="btnSubmit"
                  onClick={handleFormSubmit}
               >
                  Add User
               </button>
            </form>
         </div>
      </>
   );
};
export default UserForm;
