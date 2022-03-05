import styled from "styled-components";

export const ContactsDisplayContainer = styled.section`
   background-color: white;
   color: black;
   border-radius: 10px;
   display: grid;
   grid-template-columns: 1fr;
   align-content: space-between;
   justify-items: center;
   padding: 1.5rem;
   max-height: 365px;

   table {
      width: 100%;
      margin-bottom: 0.8rem;
   }

   thead tr {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
   }

   .dataBody {
      width: 100%;
      height: 216px;
      display: block;
      margin-top: 1.5rem;
      overflow-y: scroll;

      tr {
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         justify-items: center;
         margin-bottom: 1rem;
      }

      td:nth-child(4) {
         cursor: pointer;
         color: red;
         text-align: center;
      }
   }

   p {
      display: block;
   }
`;
