import styled from "styled-components";

export const GenericContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 3fr;
   gap: 2rem;

   @media (max-width: 1024px) {
      grid-template-columns: 1fr;
   }
`;
