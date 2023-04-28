import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  border: none;
  border-radius: 5px;
  padding: 12px;
  
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 24px;
  color: ${({theme})=> theme.COLORS.LIGHT_100};
  
  background-color: ${({theme})=> theme.COLORS.TOMATO_100};
`