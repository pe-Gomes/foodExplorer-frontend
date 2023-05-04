import styled from "styled-components";

export const Container = styled.div`
  height: 462px;

  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;


  > a {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({theme})=> theme.FONTS.POPPINS_300_BOLD};
    color: ${({theme})=> theme.COLORS.LIGHT_300};
  }

  > p {
    ${({theme})=> theme.FONTS.ROBOTO_SMALLER_REGULAR};
    color: ${({theme})=> theme.COLORS.LIGHT_400};
  }

  > span {
    ${({theme})=> theme.FONTS.ROBOTO_BIGGEST_REGULAR};
    color: ${({theme})=> theme.COLORS.CAKE_200};
  }

  
  img {
    height: 176px;
    width: 176px;
    margin-bottom: 15px;
  }

  .heartButton {
    width: 24px;
    height: 24px;

    position: absolute;
    right: 0;
    top: 0;

    &:hover {
      color: ${({theme})=> theme.COLORS.TOMATO_300};
    }
  }

  .addProduct {

    button {
    width: 92px;
    }
  }

  > div {
    padding: 0 48px;
  }
`