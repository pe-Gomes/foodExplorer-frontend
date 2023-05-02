import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
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
    padding: 0 122px;
    max-width: 1228px;
    
    margin: 0 auto;

    grid-area: "content";

    > div {
      margin-top: 42px;
  
      display: flex;
      gap: 48px;

      > img {
        height: 390px;
        width: 390px;
     }
    }
  }

  footer {
    grid-area: "footer";
    overflow-y: hidden;
  }
`;

export const Information = styled.div`

  > div {
    margin-top: 48px;

    button:nth-child(2) {
      width: 162px;
      ${({theme})=>theme.FONTS.POPPINS_100_MEDIUM};
    }
  }

  > button {
    margin-top: 48px;
    width: 131px;
  }
  
  h1 {
    ${({theme})=>theme.FONTS.POPPINS_500_MEDIUM}
  }

  p {
    ${({theme})=>theme.FONTS.POPPINS_300_REGULAR}

    margin: 24px 0;
  }
`;