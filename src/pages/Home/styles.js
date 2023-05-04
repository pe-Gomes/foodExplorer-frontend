import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 104px  auto 78px;
  grid-template-areas:
  "header"
  "content"
  "footer";

  > main {
    grid-area: "content";

    margin: 0 auto;
    max-width: 1120px;

    h2 {
    margin-bottom: 23px;
    ${({theme})=> theme.FONTS.POPPINS_400_MEDIUM};
    color: ${({theme})=> theme.COLORS.LIGHT_300};
    
  }
  }

  > footer {
    grid-area: "footer";
  }
`;

export const Hero = styled.div`
  margin: 164px 0 62px;
  
  position: relative;
  
  .styledBg {
    height: 260px;
    width: 1120px;
    
    border-radius: 8px;
    background: ${({theme})=> theme.COLORS.GRADIENT_200};
    padding-right: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
  }

  h1, p {
    color: ${({theme})=> theme.COLORS.LIGHT_300};
  }

  h1 {
    ${({theme})=> theme.FONTS.POPPINS_500_MEDIUM};
  }

  p {
    ${({theme})=> theme.FONTS.ROBOTO_SMALL_REGULAR};
  }

  > img {
    width: 656px;
    height: 412px;

    position: absolute;
    bottom: 0;
    left: -70px;
  }
`;

export const Carousel = styled.div`
  position: relative;
  max-width: 1120px;

  .left-arrow, .right-arrow {
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;

    border: none;

    width: 278px;
    
    z-index: 999;
    
    background: ${({theme})=> theme.COLORS.GRADIENT_100};

    text-align: left;
    svg {
      height: 28px;
      width: 15px;

      margin: 0 28px;
    }

    &:hover > svg { 
      transform: scale(1.10);
      path {
        fill: ${({theme})=> theme.COLORS.LIGHT_400};
      }
    }
  }

  .right-arrow {
    top: 0;
    right: 0;
    left: auto;
    bottom: 0;
    text-align: right;
    width: 224px;
    background: ${({theme})=> theme.COLORS.GRADIENT_100_REVERSE};
  }

`;

export const GalleryWrapper = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none; 

  &::-webkit-scrollbar {
    display: none;
  }

`;

export const Gallery = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 27px;



`;
