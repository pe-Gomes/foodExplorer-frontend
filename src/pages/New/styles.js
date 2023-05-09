import styled from "styled-components";
import DownArrow from '../../assets/CaretDown.svg';

export const Container = styled.div`
   width: 100%;
   min-height: 100vh;

   grid-template-columns: 100%;
   grid-template-rows: 104px auto 78px;
   grid-template-areas: 
   "header"
   "content"
   "footer";

   header {
    margin-top: 24px;
    width: fit-content;
    
    ${({theme})=>theme.FONTS.POPPINS_300_BOLD};
    
    svg {
      margin-right: 11px;
      font-size: 32px;
    }
    
  }
  
  > main {
    min-height: 100vh;
    max-width: 1120px;
    grid-area: "content";

    margin: 0 auto;

    > h1 {
      ${({theme})=>theme.FONTS.POPPINS_400_MEDIUM};
      margin: 24px 0 32px;
    }

    p {
      margin-bottom: 16px;
      ${({theme})=>theme.FONTS.ROBOTO_SMALL_REGULAR};
    }
  }

  footer {
    grid-area: "footer";
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  .fileInput {
    position: relative;
    width: 229px;
    height: 48px;

    label {
      width: 229px;
      height: 48px;
      
      padding: 12px 32px;

      position: absolute;
      top: 32px;
      left: 0;

      display: flex;
      align-items: center;
      gap: 8px;
      
      background-color: ${({theme})=>theme.COLORS.DARK_800};

      ${({theme})=> theme.FONTS.POPPINS_100_MEDIUM};

      cursor: pointer;
    }
  }

  .saveButton {
    display: flex;
    width: 172px;
    background-color: ${({theme})=> theme.COLORS.TOMATO_400};
  }
`;

export const FirstRow = styled.div `
  width: 100%;
  display: flex;
  gap: 0 32px;

// Selecting child div (InputWrappers)
  > div:nth-child(1) {
    position: relative;
    width: 229px;
    
    grid-area: "file";
  }

  > div:nth-child(2) {
    grid-area: "name";
    width: 464px;
  }

  > div:nth-child(3) {
    width: 364px;
    grid-area: "category";
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  input[type=file] {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  input {
    background-color: ${({theme})=>theme.COLORS.DARK_800} !important;
  }
  
  > p {
    margin-bottom: 16px;
  }

  select {
    padding: 13px 16px;
    
    height: 48px;
    
    appearance: none;
    -webkit-appearance: none;
    
    ${({theme})=> theme.FONTS.ROBOTO_SMALLEST_REGULAR}
    color: ${({theme})=> theme.COLORS.LIGHT_400};
    
    background-color: ${({theme})=> theme.COLORS.DARK_800};
    border: none;
    border-radius: 5px;

    background-image: url(${DownArrow});
    background-repeat: no-repeat;
    background-position: right 16px top 50%;
  }
`;

export const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 837px 252px;

  margin-top: 32px;

  > div:nth-child(2) {
    margin-left: 32px;
    min-width: 252px;
    
    input {
      background-color: ${({theme})=> theme.COLORS.DARK_800} !important;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
  }
`;

export const TagsWrapper = styled.div`
  width: 100%;

  background-color: ${({theme})=> theme.COLORS.DARK_800};

  padding: 8px;
  border-radius: 5px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 130px));
  gap: 16px;

  > div {
    width: 100%;
  }

  svg {
    animation: transform .5s;
  }

  button:hover {
    background-color: transparent;
    svg {
      transform: scale(1.15);
      animation: transform .5s;
    }
  }

`;

export const ThirdRow = styled.div`
  margin: 32px 0;
 
  > div {
    display: flex;
    gap: 32px;
    justify-content: flex-end;
  }
 
  button {
    margin-top: 32px;

    &:hover {
      background-color: ${({theme})=> theme.COLORS.TOMATO_200};
    }
  }
`;