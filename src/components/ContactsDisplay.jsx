import { EachContact } from "./";
import { ContactsDisplayContainer } from "./";

const ContactsDisplay = ({ userData, deleteUser, deleteAll }) => {
   const contactsListEmpty = userData.length === 0 ? true : false;

   return (
      <ContactsDisplayContainer>
         {contactsListEmpty && <div>No Contact added yet!</div>}
         {!contactsListEmpty && (
            <>
               <table>
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Delete User</th>
                     </tr>
                  </thead>
                  <EachContact userData={userData} deleteUser={deleteUser} />
               </table>
               <button
                  onClick={() => {
                     deleteAll([]);
                  }}
               >
                  Remove All
               </button>
            </>
         )}
      </ContactsDisplayContainer>
   );
};

export default ContactsDisplay;
