import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-left: 33px;

    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    font-size: clamp(0.4rem, 2vw + 1px, 0.85rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const AddRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  > button {
    background: transparent;
    border: none;
    outline: none !important;

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
    ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
