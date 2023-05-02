import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding-right: 16px;

  border-radius: 5px;
  
  border: ${({theme, isNew})=> isNew ? `dashed 1px ${theme.COLORS.LIGHT_500}` : "none"};
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_500};
  
  > input {
    width: 100%;
    height: 32px;

    padding: 8px 16px;
    
    background: none;
    border: none;
    
    ${({theme})=>theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    
    &::placeholder {
      color: ${({theme})=> theme.COLORS.LIGHT_500};
    }
  }
  
  > button {
    background: transparent;
    border: none;
    
    > svg {
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      width: 10px;
      height: 10px;

      path {
        fill: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        stroke: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
      }
    }
  }
`;