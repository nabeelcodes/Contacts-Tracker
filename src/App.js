import { useState, useEffect } from "react";
import { ContactsDisplay, ContactsForm, GenericContainer, GlobalStyles, MainContainer, Title } from "./components";

// getting values from localStorage
const getDataFromLocalStorage = () => {
   const dataFromLS = localStorage.getItem("ContactsList");
   if (dataFromLS) {
      return JSON.parse(dataFromLS);
   } else {
      return [];
   }
};

const App = () => {
   // main user contact array that gets pushed to localStorage as json
   const [contacts, setContacts] = useState(getDataFromLocalStorage());

   // run useEffect every time "contacts" array changes(new contact gets added), then push data to localStorage to update it
   useEffect(() => {
      localStorage.setItem("ContactsList", JSON.stringify(contacts));
      console.log(contacts.length);
   }, [contacts]);

   return (
      <>
         <GlobalStyles />
         <MainContainer>
            <header>
               <Title>Contacts Tracker App</Title>
               <p>Track the name, email and phone number of your contacts using Local Storage</p>
            </header>
            <GenericContainer>
               <ContactsForm userData={contacts} createUser={setContacts} />
               <ContactsDisplay userData={contacts} />
            </GenericContainer>
         </MainContainer>
      </>
   );
};

export default App;
