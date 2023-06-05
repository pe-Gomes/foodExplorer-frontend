import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;

  .return,
  main {
    width: 80%;
    margin: 0 auto;
  }

  .return {
    padding: 1.5em 0 1em 0;

    ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

    svg {
      margin-right: 12px;
      font-size: 2em;
    }
  }

  main {
    position: relative;
    flex-grow: 1;
    padding: 0 3.5em;
    img {
      height: 17em;
      height: 17em;
    }
  }

  .image {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1150px) {
    .return {
      padding-bottom: 1.5em 0 0 3em;
    }

    main {
      display: flex;
      gap: 3em;
      margin-bottom: 3.5em;

      img {
        height: 25em;
        width: 25em;
      }
    }
  }
`

export const Information = styled.div`
  > div {
    margin-top: 3em;

    > button:nth-child(2) {
      width: 162px;
      ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    }
  }

  .tags-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(0.5em, 5.8em));
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    span {
      display: block;
      text-align: center;
    }
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM}
    font-size: clamp(1.5rem,5vw + 1rem,2.5rem);
    text-align: center;
    margin-top: 1em;
  }

  p {
    ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR}
    font-size: clamp(.8rem, 2vw + 1rem, 1.5rem);

    margin: 2em 0;
  }

  > button {
    margin-top: 3em;
  }

  @media (min-width: 1150px) {
    .tags-wrapper {
      display: flex;
      gap: 1em;
      justify-content: start;
    }
    h1,
    p {
      text-align: left;
    }

    h1 {
      margin: 0;
    }
  }
`
