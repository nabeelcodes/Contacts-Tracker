import styled from "styled-components";

export const ContactsDisplayContainer = styled.section`
   flex-grow: 1;
   background-color: white;
   color: black;
   border-radius: 10px;
   padding: 1.5rem;
   margin: 0 1rem;

   table {
      margin-bottom: 0.8rem;
   }

   th,
   td {
      padding: 0.5rem 1rem;
   }

   td:nth-child(4) {
      cursor: pointer;
      color: red;
      text-align: center;
   }

   p {
      text-align: center;
      padding: 0.5rem 0;
      margin-bottom: 0.8rem;
   }
`;
