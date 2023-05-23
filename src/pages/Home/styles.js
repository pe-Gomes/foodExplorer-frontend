import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    width: 90%;
    margin: 0 auto;
    flex-grow: 1;
    h2 {
      margin-bottom: 23px;
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      font-size: clamp(1rem, 4vw + 0.5rem, 2rem);
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  @media (min-width: 1150px) {
    > main {
      max-width: 1120px;
      margin: 0 auto;
    }
  }
`

export const Hero = styled.div`
  position: relative;

  .styledBg {
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    height: 120px;

    padding: 0 12px 0 12em;
    margin: 3.5em 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
  }

  h1,
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: right;
  }

  h1 {
    ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
    font-size: clamp(0.5rem, 1vw + 0.7rem, 2.5rem);
  }

  p {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    font-size: clamp(0.1rem, 1vw + 0.3rem, 1rem);
  }

  > img {
    position: absolute;
    bottom: 0;
    left: -10px;
    pointer-events: none;

    width: 191px;
    height: 149px;
  }

  @media (min-width: 524px) {
    > img {
      width: 21em;
      height: 13em;
    }
  }

  @media (min-width: 1150px) {
    margin: 164px 0 62px;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }

    .styledBg {
      height: 17em;
      width: 100%;
      padding-right: 100px;
    }

    > img {
      width: 41em;
      height: 25em;
    }
  }
`

export const Carousel = styled.div`
  position: relative;

  .web {
    display: none;
  }

  .focus {
    background: none;
    pointer-events: none;
  }

  @media (min-width: 1150px) {
    .web {
      display: block;
    }

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
  }
`

export const Gallery = styled.div`
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  gap: ${({ isAdmin }) => (isAdmin ? '4em' : '0')};

  @media (min-width: 1150px) {
    width: 100%;
    margin: 0;

    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x proximity;
    flex-flow: row nowrap;
    gap: 27px;
    padding: 0 228px;
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
