import styled from "styled-components";
import DownArrow from '../../assets/CaretDown.svg';

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   grid-template-rows: 104px auto 78px;
   grid-template-areas:
   "header"
   "content"
   "footer";

   header {
    height: fit-content;
    margin-top: 24px;
    
    ${({theme})=>theme.FONTS.POPPINS_300_BOLD};
    
    svg {
      margin-right: 11px;
      font-size: 32px;
    }
  }
  
  > main {
    width: 100%;
    max-width: 1091px;
    
    margin: 0 auto;
    
    grid-area: "content";

    > h1 {
      ${({theme})=>theme.FONTS.POPPINS_400_MEDIUM};
      margin: 24px 0 32px;
    }
  }
`;

export const Form = styled.div`
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
`;

export const FirstRow = styled.div `
  display: grid;
  grid-template-columns: 229px 464px 364px;
  grid-template-areas: "file" "name" "category";
  gap: 0 32px;

// Selecting child div (InputWrappers)
  > div:nth-child(1) {
    position: relative;
    
    grid-area: "file";
  }

  > div:nth-child(2) {
    grid-area: "name";
  }

  > div:nth-child(3) {
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
  
  > form, > select {
    margin-top: 16px;
  }

  p {
    ${({theme})=>theme.FONTS.ROBOTO_SMALL_REGULAR};
  }

  select {
    padding: 13px 16px;
    
    height: 48px;
    
    appearance: none;
    -webkit-appearance: none;

    background-color: ${({theme})=> theme.COLORS.DARK_800};
    border: none;
    border-radius: 5px;

    ${({theme})=>theme.FONTS.ROBOTO_SMALLEST_REGULAR};
    color: ${({theme})=> theme.COLORS.LIGHT_400};

    background-image: url(${DownArrow});
    background-repeat: no-repeat;
    background-position: right 24px top 50%;
  }

`;

export const SecondRow = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: auto 252px;

  margin-top: 32px;
  
  p {
    ${({theme})=>theme.FONTS.ROBOTO_SMALL_REGULAR};
    margin-bottom: 16px;
  }

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