const ContactsDisplay = ({ userData }) => {
   const contactsListEmpty = userData.length === 0 ? true : false;

   return (
      <div>
         {contactsListEmpty && <div>No Contact added yet!</div>}
         <div>
            {userData.map((contact) => (
               <p key={contact.id}>{contact.firstName}</p>
            ))}
         </div>
      </div>
   );
};

export default ContactsDisplay;
