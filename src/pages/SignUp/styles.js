import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 300px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 56px 0;
      padding: 74px 0;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 19px;

  > h1 {
    ${({ theme }) => theme.FONTS_ROBOTO_GIANT_BOLD};
    font-size: clamp(1rem, 2.2rem, 3rem);
  }

  @media screen and (max-width: 1200px) {
    & > h1 {
      font-size: 34px;
    }
  }
`

export const Form = styled.form`
  @media screen and (min-width: 1200px) {
    & {
      min-width: 476px;
    }
  }

  padding: 64px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

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
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin: 32px 0 8px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  > div button {
    margin: 32px 0;
    width: 100%;
  }

  > div {
    text-align: center;

    a {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      line-height: 24px;
    }
  }
`
