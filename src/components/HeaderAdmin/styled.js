import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 0 2.75em;

  padding: 3.5em 1.75em 1.75em;

  .web {
    display: none;
  }

  .active {
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  }

  @media (min-width: 1150px) {
    padding: 1.5em 8em;

    .mobile {
      display: none;
    }
    .web {
      display: flex;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;

  > svg {
    grid-area: 'logo';

    width: 30px;
    height: 30px;
  }

  > h1 {
    ${({ theme }) => theme.FONTS_ROBOTO_BIGGER_BOLD}
  }
  span {
    ${({ theme }) => theme.FONTS_ROBOTO_SMALLEST_REGULAR}
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    text-align: end;
  }

  @media (min-width: 1150px) {
    display: grid;
    align-items: center;
    justify-content: end;

    grid-template-columns: 30px auto;
    grid-template-rows: 30px auto;
    grid-template-areas:
      'logo' 'text'
      'admin';

    > svg {
      grid-area: 'logo';
    }

    > h1 {
      min-width: 172px;
      grid-area: 'text';
    }
    span {
      grid-area: 'admin';
      grid-column: 2;
    }
  }
`

export const Search = styled.div`
  width: 100%;
  position: relative;

  input {
    padding-left: 138px !important;
    outline: none !important;
  }

  svg {
    height: 24px;
    width: 24px;

    position: absolute;
    left: 102px;

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

export const SearchResults = styled.ul`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;

  max-height: 324px;
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

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  > button:first-child {
    width: 216px;
  }

  .exitIcon {
    width: 2em;
    height: 2em;

    svg > path {
      stroke: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    &:hover {
      > path {
        stroke: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }
`
