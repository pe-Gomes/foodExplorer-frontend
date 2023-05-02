import styled from 'styled-components' ;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  margin: 0 auto;
`;


export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 42px;
    font-weight: 700;
    
  }
`;

export const Form = styled.div`
  min-width: 476px;

  padding: 64px;
  background-color: ${({theme})=> theme.COLORS.DARK_700};

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${({theme})=> theme.COLORS.LIGHT_400};

    margin: 32px 0 8px;
  }

  > button {
    margin: 32px 0;
  }
  
  > div {

    text-align: center;

    a {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 24px;
    }
  }
`;
