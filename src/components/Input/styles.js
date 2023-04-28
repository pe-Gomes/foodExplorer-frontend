import styled from "styled-components";

export const Container = styled.form`
  width: 100%;

  background-color: ${({theme})=> theme.COLORS.DARK_900};

  > input {
    width: 100%;
    height: 48px;
    border: none;

    padding: 16px 14px;
    background: transparent;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 160%;
    color: ${({theme})=> theme.COLORS.LIGHT_400};

    &::placeholder{
      color: ${({theme})=> theme.COLORS.LIGHT_500};
    }

  }
`;