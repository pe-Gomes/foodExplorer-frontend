import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 8px;
    background: none;
    scroll-behavior: smooth;
  }


  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    outline: 1px solid ${({ theme }) => theme.COLORS.DARK_100};
    border-radius: 8px;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  button:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  input:focus, textarea:focus, select:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.CAKE_100};
  }

  button:focus {
    outline: .5px solid ${({ theme }) => theme.COLORS.TOMATO_300};
  }
  
  input[type=number] {
    appearance: none;
    -moz-appearance:textfield;
  }
`
