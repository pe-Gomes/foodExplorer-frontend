import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  border: none;
  border-radius: 5px;
  padding: 12px;

  ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  svg {
    font-size: 2rem;
  }
`
