import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  outline: none !important;

  ${({ theme }) => theme.FONTS_POPPINS_300_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  &:hover {
    background-color: transparent;
  }
`
