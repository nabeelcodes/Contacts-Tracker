import styled from "styled-components";

export const FormCard = styled.div`
   background-color: white;
   padding: 1.5rem;
   margin: 1rem;
   border-radius: 10px;

   input {
      font-size: 1rem;

      max-width: 20rem;
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

   button {
      cursor: pointer;
      width: 100%;
      padding: 0.5rem 0;
      border: 2px solid rgb(0, 168, 107);
      border-radius: 50px;
      font-size: 1rem;
      font-weight: bold;
      background-color: rgb(0, 168, 107);
      color: white;
      transition: background-color 350ms linear, border 350ms linear;
   }

   button:hover {
      background-color: white;
      color: rgba(0, 168, 107, 0.85);
      border: 2px solid rgb(0, 168, 107);
   }
`;
