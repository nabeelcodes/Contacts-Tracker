import { Formik, Form } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { phoneRegExp } from "../data/phoneRegExp";
import FormField from "./FormField";

const ContactsForm = ({ userData, createUser }) => {
   const initialFormValues = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
   };

   const validationSchemaUsingYup = Yup.object().shape({
      firstName: Yup.string().min(1, "It's too short").required("Required"),
      lastName: Yup.string().min(1, "It's too short").required("Required"),
      email: Yup.string().lowercase().email("Enter valid email").required("Required"),
      phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Required"),
   });

   const submitHandler = (values, submitProps) => {
      const newValues = { id: uuidv4(), ...values };
      const newUserData = [...userData, newValues];
      createUser(newUserData);
      console.log("user added");

      submitProps.setSubmitting(false);
      submitProps.resetForm();
   };

   return (
      <Formik initialValues={initialFormValues} validationSchema={validationSchemaUsingYup} onSubmit={submitHandler}>
         {({ isValid, isSubmitting }) => {
            return (
               <Form>
                  <FormField type={"text"} variant={"firstName"} fieldLabel={"First Name"} placeholder={"Enter first name"} />
                  <FormField type={"text"} variant={"lastName"} fieldLabel={"Last Name"} placeholder={"Enter last name"} />
                  <FormField type={"email"} variant={"email"} fieldLabel={"Email"} placeholder={"Enter an email"} />
                  <FormField type={"text"} variant={"phoneNumber"} fieldLabel={"Phone Number"} placeholder={"Enter a phone number"} />

                  <button type='submit' disabled={!isValid || isSubmitting}>
                     Add Contact
                  </button>
               </Form>
            );
         }}
      </Formik>
   );
};

export default ContactsForm;
