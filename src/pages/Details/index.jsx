import { Container, Information } from "./styles";
import { ReactComponent as LeftArrow} from '../../assets/CaretLeft.svg';

import saladImg from '../../assets/imgs/Mask group.png'

import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { Tags } from "../../components/Tags";
import { AddProduct } from "../../components/AddProduct";
import { Footer } from "../../components/Footer";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
      <header>
        <IconButton icon={LeftArrow} title="voltar" />
      </header>
        <div>
          <img src={saladImg} alt="Foto de uma salada" />
          <Information>
           <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            <Tags title="alface" />
            <Tags title="cebola" />
            <Tags title="pão naan" />
            <Tags title="pepino" />
            <Tags title="rabanete" />
            <Tags title="tomate" />

            <AddProduct title="incluir ∙ R$ 25,00" />
            {/* <Button title="Editar prato" /> */}
          </Information>
        </div>
      </main>
      <Footer />
    </Container>
  )
};