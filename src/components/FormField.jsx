import { ErrorMessage, Field } from "formik";

const FormField = ({ type, variant, placeholder }) => {
   return (
      <div>
         <Field type={type} id={variant} name={variant} placeholder={placeholder} />
         <br />
         <p>
            <ErrorMessage name={variant} />
         </p>
      </div>
   );
};

export default FormField;
