import styled from "styled-components";

export const FormCard = styled.section`
   width: 100%;
   background-color: white;
   padding: 1.5rem;
   border-radius: 10px;

   input {
      font-size: 1rem;
      width: 100%;
      padding: 0.8rem 1rem;
      outline: none;
      border: 3px solid rgba(198, 194, 219, 0.3);
      border-radius: 5px;
   }

   input:focus {
      border: 3px solid rgb(198, 194, 219);
      outline: none;
   }

   p {
      color: red;
      font-size: 0.8rem;
      padding: 0.5rem 0;
   }

   @media (max-width: 990px) {
      margin-bottom: 1rem;
   }
`;
