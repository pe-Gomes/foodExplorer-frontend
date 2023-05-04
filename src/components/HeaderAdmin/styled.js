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
  min-width: 198px;
  margin-right: 32px;

  display: grid;
  align-items: center;
  justify-content: end;

  grid-template-columns: 30px auto;
  grid-template-rows: 30px auto;
  grid-template-areas:
    "logo" "text"
    "admin";

  > svg {
    grid-area: "logo";

    width: 30px;
    height: 30px;
  }

  > h1 {
    margin-left: 10px;

    grid-area: "text";
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
  }
  span {
    grid-area: "admin";
    grid-column: 2;
    
    font-family: 'Roboto', sans-serif;
    line-height: 160%;
    font-size: 12px;
    color: ${({theme})=> theme.COLORS.CAKE_200};
    text-align: end;

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

    > button {
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