import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  padding: 1em;
  margin-top: 1em;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  span {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR}
    font-size: clamp(.5rem,2vw + 3px, 1rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: 1150px) {
    padding: 1.75em 7.75em;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > svg {
    width: 1.85em;
    height: 1.85em;

    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > h1 {
    ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD};
    font-size: clamp(0.5rem, 4vw + 1px, 1.5rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  @media (min-width: 1150px) {
    min-width: 12.25em;
    margin-right: 2em;
  }
`
