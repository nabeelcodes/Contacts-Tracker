import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { phoneRegExp } from "../data/phoneRegExp";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import FormField from "./FormField";
import { FormCard, StyledButton } from "./";

const ContactsForm = ({ userData, createUser }) => {
   const [isData, setIsData] = useState();
   // console.log(`isData is : ${isData}`);

   const initialFormValues = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
   };

   const validationSchemaUsingYup = Yup.object().shape({
      firstName: Yup.string().min(2, "It's too short").required("Required"),
      lastName: Yup.string().min(2, "It's too short").required("Required"),
      email: Yup.string().lowercase().email("Enter valid email").required("Required"),
      phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").max(10, "Cannot exceed ").required("Required"),
   });

   useEffect(() => {
      // console.log(`useEffect ran`);
      if (userData.length < 1) {
         // console.log(`setting isData to false`);
         setIsData(false);
      } else {
         // console.log(`setting isData to true`);
         setIsData(true);
      }
   }, [userData]);

   const checkDuplicateUser = (newUser) => {
      let duplicate = false;
      // console.log(`check duplicate ran`);
      if (isData === true) {
         userData.map((eachUser) => {
            if (eachUser.firstName === newUser.firstName && eachUser.lastName === newUser.lastName) {
               // console.log(`duplicate found, aborting..`);
               alert(`Contact already exist!`);
               duplicate = true;
            }
            return duplicate;
         });
         if (duplicate) {
            return false;
         }
      }
      return true;
   };

   const submitHandler = (values, submitProps) => {
      // console.log(`form submit ran`);

      if (checkDuplicateUser(values)) {
         const newValues = { id: uuidv4(), ...values };
         const newUserData = [...userData, newValues];
         createUser(newUserData);
         // console.log(`userAdded`);
      }
      submitProps.setSubmitting(false);
      submitProps.resetForm();
   };

   return (
      <FormCard>
         <Formik initialValues={initialFormValues} validationSchema={validationSchemaUsingYup} onSubmit={submitHandler}>
            {({ isValid, isSubmitting }) => {
               return (
                  <Form>
                     <FormField type={"text"} variant={"firstName"} placeholder={"Enter first name"} />
                     <FormField type={"text"} variant={"lastName"} placeholder={"Enter last name"} />
                     <FormField type={"email"} variant={"email"} placeholder={"Enter an email"} />
                     <FormField type={"text"} variant={"phoneNumber"} placeholder={"Enter a phone number"} />

                     <StyledButton primary type='submit' disabled={!isValid || isSubmitting}>
                        Add Contact
                     </StyledButton>
                  </Form>
               );
            }}
         </Formik>
      </FormCard>
   );
};

export default ContactsForm;
