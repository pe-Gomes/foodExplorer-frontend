import styled from "styled-components";

export const Container = styled.div`
  grid-area: "header";

  width: 100%;
  height: 104px;

  padding: 24px 123px;

  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

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
`;

export const Search = styled.div`
  height: 48px;
  width: 100%;
  position: relative;
 
  input {
    padding-left: 138px !important;
  }

  svg {
    height: 24px;
    width: 24px;

    position: absolute;
    left: 102px;

    transition: transform .5s;
    
    path {
      stroke: ${({theme})=> theme.COLORS.LIGHT_400};
    }
  }

  input:focus ~ svg {
    transform: translateX(-12px);
    transition: transform .5s;
  }
`;

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
      stroke: ${({theme})=> theme.COLORS.LIGHT_100};
    }

    &:hover {
      > path {
        stroke: ${({theme})=> theme.COLORS.LIGHT_400};
      }
    }
  }
  
`;