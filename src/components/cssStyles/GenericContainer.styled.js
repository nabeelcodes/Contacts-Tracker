import styled from "styled-components";

export const GenericContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-width: 100vw;
   padding: 0 4rem;

   @media (max-width: 990px) {
      flex-direction: column;
   }
`;
