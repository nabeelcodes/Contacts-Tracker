import styled, { css } from "styled-components";

export const StyledButton = styled.button`
   cursor: pointer;
   width: 100%;
   padding: 0.5rem 0;
   color: rgb(255, 105, 97);
   background-color: rgba(255, 105, 97, 0.2);
   border: 2px solid rgb(255, 105, 97);
   border-radius: 5px;
   font-size: 1rem;
   font-weight: bold;
   transition: background-color 350ms linear;

   &:hover {
      background-color: white;
   }

   ${({ primary }) =>
      primary &&
      css`
         color: rgb(0, 168, 107);
         background-color: rgba(0, 168, 107, 0.2);
         border: 2px solid rgb(0, 168, 107);
      `}

   &.submitBtn {
      margin-top: 1rem;
   }
`;
