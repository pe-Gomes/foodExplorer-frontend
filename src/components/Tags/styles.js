import styled from 'styled-components'

export const Container = styled.span`
  width: 100%;
  height: 32px;

  padding: 4px 8px;
  margin-right: 12px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
