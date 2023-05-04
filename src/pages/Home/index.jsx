import { Container, Hero, Carousel, Gallery, GalleryWrapper } from './styles';
import HomeImg from '../../assets/imgs/img-home.png';
import img1 from '../../assets/imgs/Mask group-2.png';
import { ReactComponent as LeftArrow} from '../../assets/CaretLeft.svg';
import { ReactComponent as RightArrow} from '../../assets/CaretRight.svg';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Product } from '../../components/Product';

export function Home() {

  return (
    <Container>
      <Header />
      <main>
        <Hero>
          <img src={HomeImg} alt="Doces e frutas coloridas flutuando no ar" />
          <div className="styledBg">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <h2>Refeições</h2>
        <Carousel>
          <button className="left-arrow control" ><LeftArrow /></button>
          <button className="right-arrow control"><RightArrow /></button>
          <GalleryWrapper>
            <Gallery>
              <Product 
                className="product current-product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
            </Gallery>
          </GalleryWrapper>
        </Carousel>
        <h2>Sobremesas</h2>
        <Carousel>
          <button className="left-arrow control" ><LeftArrow /></button>
          <button className="right-arrow control"><RightArrow /></button>
          <GalleryWrapper>
            <Gallery>
              <Product 
                className="product current-product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
            </Gallery>
          </GalleryWrapper>
        </Carousel>

        <h2>Bebidas</h2>
        <Carousel>
          <button className="left-arrow control" ><LeftArrow /></button>
          <button className="right-arrow control"><RightArrow /></button>
          <GalleryWrapper>
            <Gallery>
              <Product 
                className="product current-product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
              <Product 
                className="product"
                src={img1}
                productName="Spaguetti Gambe" 
                productDescription="Massa fresca com camarões"
                productPrice="R$ 79,97"
              />
            </Gallery>
          </GalleryWrapper>
        </Carousel>

      </main>
      <Footer />
    </Container>
  )
}