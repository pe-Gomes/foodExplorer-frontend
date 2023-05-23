import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  > button {
    width: 162px;
    height: 2em;
    margin: 0 0 24px 0;
    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: 1150px) {
    flex-direction: row;

    > button {
      width: 100%;
      height: 3em;
      margin: 0 0 0 33px;
    }
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
