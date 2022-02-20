import styled from "styled-components";

export const ContactsDisplayContainer = styled.div`
   background-color: white;
   color: black;
   border-radius: 10px;
   padding: 1.5rem;
   margin: 1rem;
   max-height: 15rem;
   overflow: auto;

   th,
   td {
      padding: 0.5rem 1rem;
   }

   td:nth-child(4) {
      cursor: pointer;
      color: red;
      text-align: center;
   }

   button {
      cursor: pointer;
      width: 100%;
      margin-top: 1rem;
      padding: 0.5rem 0;
      border: 2px solid rgb(255, 105, 97);
      border-radius: 50px;
      font-size: 1rem;
      font-weight: bold;
      background-color: rgb(255, 105, 97);
      color: white;
      transition: background-color 350ms ease-in-out, border 350ms ease-in-out;
   }

   button:hover {
      background-color: white;
      color: rgba(255, 105, 97, 0.85);
      border: 2px solid rgb(255, 105, 97);
   }
`;
