import styled from 'styled-components'

export const Container = styled.div`
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
    outline: none !important;
    width: 18px;
    height: 18px;

    animation: transform 0.4s;

    svg {
      font-size: 18px;
      width: 18px;
      height: 18px;
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
