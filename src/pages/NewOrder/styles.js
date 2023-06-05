import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;

  .return {
    padding: 0.5em 0 1em 1.5em;
    width: fit-content;

    ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

    svg {
      margin-right: 12px;
      font-size: 2em;
    }
  }

  main {
    width: 80%;
    margin: 0 auto;
    flex-grow: 1;
  }

  .products {
    width: 80%;
    margin: 0 auto;
    flex-grow: 1;
    display: none;
  }

  .advance {
    padding: 3.5em 2em;

    > button {
      width: 50%;
      max-width: 14em;
      margin-right: 0;
      margin-left: auto;
    }
  }

  .checkout {
    max-width: 90%;
    margin: 0 auto;
    flex-grow: 1;
  }

  .invisible {
    display: none;
  }

  .visible {
    display: block;
  }

  footer {
    margin-top: 2em;
  }

  @media (min-width: 1150px) {
    main {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;

      width: 80%;
      margin: 0 auto;
    }

    .advance {
      display: none;
    }

    .web-order {
      display: block;
    }
    .products {
      width: 50%;
    }
  }
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1em;

  h2,
  p {
    ${({ theme }) => theme.FONTS.POPPINS_200_MEDIUM}
  }

  p {
    margin-top: 1em;
  }

  span {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR}
    text-align: right;
  }

  img {
    width: 20%;
    height: 20%;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .information {
    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};

      margin-right: 1em;
      width: fit-content;
    }
  }

  @media (min-width: 1150px) {
    img {
      max-width: 100px;
      max-height: 100px;
    }
  }
`

export const Checkout = styled.div`
  width: 100%;

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM}
    margin-bottom: 2em;
  }

  .tab-wrapper {
    width: 100%;
  }

  .tab-list {
    display: flex;
    align-items: center;
    justify-content: center;

    > button:first-child {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-right: none;
      border-radius: 8px 0 0 0;
    }

    > button:last-child {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 0 8px 0 0;
    }
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    width: 100%;
    padding: 2em;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .tab-panel {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-top: none;
    border-radius: 0 0 8px 8px;

    padding: 3em 2em;

    svg {
      width: 50%;
      height: 50%;
    }

    > div {
      width: 100%;
    }

    div:first-child {
      align-self: flex-start;
      input {
        width: 100%;
      }
    }

    label {
      margin-top: 0.5em;
    }

    .credit-card {
      display: flex;
      align-items: center;
      gap: 1em;

      margin-top: 2em;
    }

    > button {
      margin-top: 2em;
    }
  }

  @media (min-width: 1150px) {
    width: 100%;
  }
`
