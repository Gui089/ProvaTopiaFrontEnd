import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
     }

     html {
        font-family: sans-serif;
        background-color:#161A23 ;
     }

     ul {
        list-style: none;
     }

     a {
        text-decoration: none;
     }
`;