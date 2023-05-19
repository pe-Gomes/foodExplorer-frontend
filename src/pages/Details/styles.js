import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 78px;
  grid-template-areas:
    'header'
    'content'
    'footer';

  header {
    margin-top: 24px;

    ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

    svg {
      margin-right: 11px;
      font-size: 32px;
    }
  }

  > main {
    padding: 0 122px;
    max-width: 1228px;

    margin: 0 auto;

    grid-area: 'content';

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

  @media (max-width: 1024px) {
    main {
      padding: 0 15px;
      max-width: 80vw;
    }

    main > div {
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > img {
        width: 186px;
        height: 186px;
      }
    }
  }

  footer {
    grid-area: 'footer';
  }
`

export const Information = styled.div`
  @media (max-width: 1024px) {
    & {
      width: 100%;
    }

    & > div {
      width: fit-content;
      margin: 0 auto 24px auto;
    }

    .tags {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 12px;
    }
  }

  > div {
    margin-top: 48px;

    button:nth-child(2) {
      width: 162px;
      ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    }
  }

  > button {
    margin-top: 48px;
    width: 131px;
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM}
  }

  p {
    ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR}

    margin: 24px 0;
  }
`
