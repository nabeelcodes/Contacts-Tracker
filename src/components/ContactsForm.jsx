import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactsForm = () => {
   const initialFormValues = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: 0,
   };

   const validationSchemaUsingYup = Yup.object().shape({
      firstName: Yup.string().min(1, "It's too short").required("Required"),
      lastName: Yup.string().min(1, "It's too short").required("Required"),
      email: Yup.string().lowercase().email("Enter valid email").required("Required"),
      phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Required"),
   });

   const submitHandler = (values, submitProps) => {
      console.log("Form data", values);
      console.log("submitProps", submitProps);

      submitProps.setSubmitting(false);
      submitProps.resetForm();
   };

   return (
      <Formik initialValues={initialFormValues} validationSchema={validationSchemaUsingYup} onSubmit={submitHandler}>
         {({ isValid, isSubmitting }) => {
            return (
               <Form>
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
