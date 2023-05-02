import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 5px;
  padding: 12px;
  
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 24px;
  color: ${({theme})=> theme.COLORS.LIGHT_100};
  
  background-color: ${({theme})=> theme.COLORS.TOMATO_100};

  svg {
    font-size: 32px;
  }
`