import styled from 'styled-components'

export const Container = styled.span`
  padding: 4px 8px;
  margin-right: 12px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM}
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
