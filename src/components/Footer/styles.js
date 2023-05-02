import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 78px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 28px 123px;

  background-color: ${({theme})=>theme.COLORS.DARK_600};
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  min-width: 198px;
  margin-right: 32px;

  > svg {
    width: 30px;
    height: 30px;
    
    path {
      fill: ${({theme})=>theme.COLORS.LIGHT_700};
    }
  }

  > h1 {
    ${({theme})=>theme.FONTS.ROBOTO_BIGGER_BOLD};
    color: ${({theme})=>theme.COLORS.LIGHT_700};
  }
`;