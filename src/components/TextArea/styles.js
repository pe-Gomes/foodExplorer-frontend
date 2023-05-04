import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background-color: ${({theme})=> theme.COLORS.DARK_800};
  color: ${({theme})=> theme.COLORS.LIGHT_100};
  border: none;
  resize: none;
  border-radius: 8px;

  padding: 14px;

  &::placeholder {
    ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({theme})=> theme.COLORS.LIGHT_500};
  }
`;