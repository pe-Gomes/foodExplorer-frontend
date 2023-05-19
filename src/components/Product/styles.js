import styled from 'styled-components'

export const Container = styled.div`
  height: 462px;
  min-width: 258px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    text-align: center;
    height: 44px;
  }

  > span {
    ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  img {
    height: 176px;
    width: 176px;
    margin-bottom: 15px;
    pointer-events: none;

    scroll-snap-align: center;
  }

  .iconButton {
    width: 24px;
    height: 24px;

    border: none;
    background: transparent;

    position: absolute;
    right: 0;
    top: 0;
    box-sizing: content-box;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .heartIcon {
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
`
