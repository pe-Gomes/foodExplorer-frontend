import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;


  ${({theme})=> theme.FONTS_POPPINS_300_BOLD};
  color: ${({theme})=> theme.COLORS.WHITE_100};

  &:hover{
    background-color: transparent;
  }
`;