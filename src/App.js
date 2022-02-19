import React from "react";
import { ContactsForm, ContactsDisplay } from "./components";
import { MainContainer, Title, GenericContainer } from "./components";

const App = () => {
   return (
      <MainContainer>
         <Title>Contacts Tracker App</Title>
         <p>Track the name, email and phone number of your contacts using Local Storage</p>
         <GenericContainer>
            <ContactsForm />
            <ContactsDisplay />
         </GenericContainer>
      </MainContainer>
   );
};

export default App;
