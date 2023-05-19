import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 104px auto 78px;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: 'content';

    margin: 0 auto;
    max-width: 1120px;

    h2 {
      margin-bottom: 23px;
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > footer {
    grid-area: 'footer';
  }
`

export const Hero = styled.div`
  margin: 164px 0 62px;

  position: relative;

  .styledBg {
    height: 260px;
    width: 1120px;

    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    padding-right: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
  }

  h1,
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
  }

  p {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
  }

  > img {
    width: 656px;
    height: 412px;

    position: absolute;
    bottom: 0;
    left: -70px;
  }
`

export const Carousel = styled.div`
  position: relative;

  .left-arrow,
  .right-arrow {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;

    border: none;
    outline: none !important;

    width: 224px;

    z-index: 1;

    background: ${({ theme }) => theme.COLORS.GRADIENT_100};

    text-align: left;
    svg {
      height: 28px;
      width: 15px;

      margin: 0 28px;
    }

    &:hover > svg {
      transform: scale(1.1);
      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }

  .right-arrow {
    top: 0;
    right: 0;
    left: auto;
    bottom: 0;
    text-align: right;
    background: ${({ theme }) => theme.COLORS.GRADIENT_100_REVERSE};
  }

  .focus {
    background: none;
    pointer-events: none;
  }
`

export const Gallery = styled.div`
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-flow: row nowrap;
  gap: 27px;

  padding: 0 228px;
`

export const Products = styled.div`
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
    outline: none;
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

export const AddProduct = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  > button {
    margin-left: 33px;
    height: 48px;

    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const AddRemove = styled.div`
  display: flex;
  align-items: center;

  > button {
    background: transparent;
    border: none;
    width: 18px;
    height: 18px;

    animation: transform 0.4s;

    svg {
      font-size: 18px;
      width: 18px;
      height: 18px;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    &:hover {
      background-color: transparent;
      transform: scale(1.15);
      animation: transform 0.5s;
    }
  }

  span {
    margin: 0 14px;

    ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
