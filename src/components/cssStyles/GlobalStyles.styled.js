import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 8px;
    }

    ::-webkit-scrollbar-thumb {
    background: #909090;
    border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
    }

    body {
        font-family: "Inter", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
