import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
    font-size: clamp(0.5rem, 2vw + 0.5rem, 1.5rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    height: max-content;
  }

  > p {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
  }

  > span {
    ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR};
    font-size: clamp(0.5rem, 3vw + 0.5rem, 1.5rem);
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  img {
    height: 88px;
    width: 88px;
    margin-bottom: 15px;
    pointer-events: none;

    scroll-snap-align: center;
  }

  .iconButton {
    width: 16px;
    height: 16px;

    border: none;
    outline: none;
    background: transparent;

    position: absolute;
    right: 0;
    top: 0;
    box-sizing: content-box;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .heartIcon {
    right: 42px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    &:hover {
      color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
  }

  .isActive {
    color: ${({ theme }) => theme.COLORS.TOMATO_300};
  }

  .addProduct {
    button {
      width: 92px;
    }
  }

  > div {
    padding: 0 48px;
  }

  @media (min-width: 1150px) {
    height: 462px;
    min-width: 258px;

    gap: 1em;

    > p {
      height: 44px;
    }

    img {
      height: 176px;
      width: 176px;
    }

    .iconButton {
      width: 24px;
      height: 24px;
    }

    > div {
      padding: 0 48px;
    }
  }
`
