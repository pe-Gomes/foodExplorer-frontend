import styled from 'styled-components'

export const Container = styled.div`
  grid-area: 'header';

  width: 100%;
  height: 104px;

  padding: 24px 123px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;

  min-width: 198px;
  margin-right: 32px;

  > svg {
    width: 30px;
    height: 30px;
  }

  > h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
`

export const Search = styled.div`
  height: 48px;
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

  > button:first-child {
    margin: 0 32px;
    width: 216px;
  }

  .exitIcon {
    width: 32px;
    height: 32px;

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
