import { useState, useEffect } from "react";
import { ContactsDisplay, ContactsForm, GenericContainer, GlobalStyles, MainContainer, Title } from "./components";

// getting values from localStorage
const getDataFromLocalStorage = () => {
   try {
      const dataFromLS = localStorage.getItem("ContactsList");
      if (dataFromLS === null) {
         return [];
      }
      return JSON.parse(dataFromLS);
   } catch (error) {
      console.log(error);
   }
};

const App = () => {
   // main user contact array that gets pushed to localStorage as json
   const [contacts, setContacts] = useState(getDataFromLocalStorage());

   // run useEffect every time "contacts" array changes(new contact gets added), then push data to localStorage to update it
   useEffect(() => {
      console.log(`data set to LS`);
      localStorage.setItem("ContactsList", JSON.stringify(contacts));
   }, [contacts]);

   // Delete a contact
   const deleteUser = (userId) => {
      if (contacts) {
         const filteredContacts = contacts.filter((eachContact) => {
            return eachContact.id !== userId;
         });
         setContacts(filteredContacts);
      }
   };

   return (
      <>
         <GlobalStyles />
         <MainContainer>
            <header>
               <Title>Contacts Tracker App</Title>
               <p>Keep a tab on the details of your contacts using Local Storage</p>
            </header>
            <GenericContainer>
               <ContactsForm userData={contacts} createUser={setContacts} />
               <ContactsDisplay userData={contacts} deleteUser={deleteUser} deleteAll={setContacts} />
            </GenericContainer>
         </MainContainer>
      </>
   );
};

export default App;
