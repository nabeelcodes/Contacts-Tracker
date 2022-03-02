import styled from "styled-components";

export const MainContainer = styled.main`
   display: grid;
   grid-template-columns: 1fr;
   place-items: flex-start center;
   min-height: 100vh;
   gap: 4rem;
   padding: 3rem;
   background-color: #c3c7d9;

   header {
      width: fit-content;

      p {
         text-align: center;
      }
   }

   /* div {
      flex-grow: 1;
      margin: 1rem 0;
   } */
`;
