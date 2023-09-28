import React from 'react';

const UserList = props => {
   const { formData } = props;
   return (
      <>
         <div className="userList">
            {formData.map((item, index) => (
               <span key={`user-${index + 1}`} className="userList__text">
                  {`${item.username} (${item.age} years old)`}
               </span>
            ))}
         </div>
      </>
   );
};
export default UserList;
