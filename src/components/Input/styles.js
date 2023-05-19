import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  display: flex;

  align-items: center;

  input {
    width: 100%;
    height: 48px;
    border: none;
    border-radius: 5px;

    padding: 16px 14px;
    background: transparent;

    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
