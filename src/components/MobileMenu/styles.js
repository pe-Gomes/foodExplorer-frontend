import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;

  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  header {
    display: flex;
    align-items: center;
    padding: 4em 0 2em 2em;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    svg {
      width: 18px;
      height: 18px;
    }

    span {
      margin-left: 0.8em;
      ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD}
    }
  }

  .content {
    flex-grow: 1;
    width: 93%;
    margin: 0 auto;
  }

  nav {
    ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR}

    div {
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    div:first-child {
      margin-top: 2em;
    }
  }
`

export const Search = styled.div`
  position: relative;

  input {
    padding-left: 92px !important;
    outline: none !important;
  }

  svg {
    height: 24px;
    width: 24px;

    position: absolute;
    left: 52px;

    transition: transform 0.5s;

    path {
      stroke: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  input:focus ~ svg {
    transform: translateX(-12px);
    transition: transform 0.5s;
  }
`

export const SearchResults = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;

  max-height: 25em;
  overflow-y: auto;

  border-radius: 0 0 8px 8px;
  padding: 13px 50px;
  box-shadow: 0px 5px 5px ${({ theme }) => theme.COLORS.DARK_800};

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  li + li {
    margin-top: 5px;
  }

  .category {
    border-bottom: 2px dotted ${({ theme }) => theme.COLORS.CAKE_100};
    margin-bottom: 5px;
    width: fit-content;
  }

  img {
    width: 50px;
    height: 50px;
  }

  > span {
    display: block;
    margin-bottom: 5px;
    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
