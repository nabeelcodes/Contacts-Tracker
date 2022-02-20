import styled from "styled-components";

export const ContactsDisplayContainer = styled.div`
   background-color: white;
   color: black;
   border-radius: 15px;
   padding: 1.5rem;
   margin: 1rem;
   max-height: 15rem;
   overflow: auto;

   th,
   td {
      padding: 0.5rem 1rem;
   }

   td:nth-child(4) {
      color: red;
      text-align: center;
      cursor: pointer;
      /* border: 2px solid red; */
   }

   button {
      width: 100%;
      margin-top: 1rem;
      cursor: pointer;
      padding: 0.5rem 0;
      border-radius: 15px;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      background-color: #ff6961;
      color: white;
      transition: background-color 350ms linear;
      transition: letter-spacing 350ms linear;
   }

   button:hover {
      background-color: rgba(255, 105, 97, 0.9);
      letter-spacing: 2px;
   }
`;
