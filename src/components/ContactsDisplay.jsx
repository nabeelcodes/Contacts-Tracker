import { EachContact, ContactsDisplayContainer, StyledButton } from "./";

const ContactsDisplay = ({ userData, deleteUser, deleteAll }) => {
   const contactsListEmpty = userData.length === 0 ? true : false;

   return (
      <ContactsDisplayContainer>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Delete User</th>
               </tr>
            </thead>
            {!contactsListEmpty && <EachContact userData={userData} deleteUser={deleteUser} />}
         </table>

         {contactsListEmpty && <p>No Contacts added yet!</p>}

         <StyledButton
            onClick={() => {
               deleteAll([]);
            }}
         >
            Remove All
         </StyledButton>
      </ContactsDisplayContainer>
   );
};

export default ContactsDisplay;
