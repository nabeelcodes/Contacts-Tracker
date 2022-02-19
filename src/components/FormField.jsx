import { ErrorMessage, Field } from "formik";

const FormField = ({ type, variant, fieldLabel, placeholder }) => {
   return (
      <div>
         <label htmlFor={variant}>{fieldLabel}</label>
         <br />
         <Field type={type} id={variant} name={variant} placeholder={placeholder} />
         <br />
         <span>
            <ErrorMessage name={variant} />
         </span>
      </div>
   );
};

export default FormField;
