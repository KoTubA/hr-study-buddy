import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    a, button {
        font-family: 'Roboto', sans-serif;
    }
`;
