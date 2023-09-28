import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './Lab701.scss';
import UserForm from './UserForm';
import UserList from './UserList';
import ErrorModal from './ErrorModal';

// Data sample

const users = [
   {
      username: 'Joshepine',
      age: 20,
   },
   {
      username: 'Mary',
      age: 25,
   },
   {
      username: 'Jone',
      age: 30,
   },
   {
      username: 'Tony',
      age: 40,
   },
];

const Lab701 = () => {
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const usernameInput = useRef('');
   const ageInput = useRef(0);
   // handle Logic UserForm

   // State của formData
   const [formData, setFormData] = useState(users);
   const [errMsg, setErrMsg] = useState({
      errTitle: '',
      errMsg: '',
      isErr: false,
   });

   //    handle submit form
   const handleFormSubmit = event => {
      event.preventDefault();

      const usernameValue = usernameInput.current.value;

      const ageValue = ageInput.current.value;

      //   validation
      function validation(usernameValue, ageValue) {
         let isValid = true;
         //  check blank
         if (
            usernameValue.trim().length === 0 ||
            Number.isNaN(parseInt(ageValue))
         ) {
            setErrMsg({
               errTitle: 'Invalid input',
               errMsg: 'Please enter a valid name and age (non-empty values)',
               isErr: true,
            });

            isValid = false;
         }
         if (ageValue <= 0) {
            setErrMsg({
               errTitle: 'Invalid Age',
               errMsg: 'Please enter a valid Age (>0)',
               isErr: true,
            });

            isValid = false;
         }
         return isValid;
      }
      const valid = validation(usernameValue, ageValue);
      if (valid) {
         // create a new user variable for saving

         //  Update for state formData
         setFormData([
            ...formData,
            {
               username: usernameValue,
               age: parseInt(ageValue),
            },
         ]);
         //  reset value
         usernameInput.current.value = '';
         ageInput.current.value = 0;
         usernameInput.current.focus();
         alert('Submit success');
      }
   };

   const handleErrorBtn = e => {
      e.preventDefault();
      setErrMsg({
         errTitle: '',
         errMsg: '',
         isErr: false,
      });
   };

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const errorModalRoot = document.getElementById('errorModal');
   return (
      <>
         <div className="center">
            <UserForm
               handleFormSubmit={handleFormSubmit}
               usernameInput={usernameInput}
               ageInput={ageInput}
            ></UserForm>
            <UserList formData={formData}></UserList>
         </div>

         {errMsg.isErr &&
            ReactDOM.createPortal(
               <ErrorModal
                  message={errMsg.errMsg}
                  title={errMsg.errTitle}
                  errorConfirm={errMsg.isErr}
                  handleErrorBtn={handleErrorBtn}
               ></ErrorModal>,
               errorModalRoot,
            )}
      </>
   );
};

export default Lab701;
