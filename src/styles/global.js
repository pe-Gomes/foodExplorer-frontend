import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 140%;

    color: ${({theme})=> theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a {
    text-decoration: none;
    color: ${({theme})=> theme.COLORS.LIGHT_100};
  }

  button:hover {
    background-color: ${({theme})=> theme.COLORS.TOMATO_200};
  }
`;
