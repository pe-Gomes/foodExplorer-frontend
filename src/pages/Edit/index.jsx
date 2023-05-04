import { Container, Form, FirstRow, SecondRow, InputWrapper, TagsWrapper, ThirdRow } from "./styles";
import { ReactComponent as LeftArrow} from '../../assets/CaretLeft.svg';
import { ReactComponent as UploadIcon } from '../../assets/Upload.svg';

import { HeaderAdmin } from '../../components/HeaderAdmin';
import { IconButton } from "../../components/IconButton";
import { Input } from "../../components/Input";
import { TagButton } from "../../components/TagButton";
import { TextArea } from '../../components/TextArea';
import { Button } from "../../components/Button";
import { Footer } from '../../components/Footer';


export function Edit() {

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <header>
          <IconButton icon={LeftArrow} title="voltar" />
        </header>
        <h1>Editar prato</h1>
        <Form>
          <FirstRow>
            <InputWrapper className="fileInput"> 
              <p>Imagem do prato</p>
              <label htmlFor="image">
                <UploadIcon /> Selecione imagem
              </label>
              <input type="file" id="image" />
            </InputWrapper>
            
            <InputWrapper>
              <p>Nome</p>
              <Input type="text" placeholder="Ex.: Salada Ceasar" />
            </InputWrapper>

            <InputWrapper>
              <p>Categoria</p>
              <select htmlFor="categories-select">
                <option>Refeição</option>
                <option>Sobremesa</option>
                <option>Bebida</option>
              </select>
            </InputWrapper>

          </FirstRow>

          <SecondRow>
            <div>
              <p>Ingredientes</p>
              <TagsWrapper>
                <TagButton />
                <TagButton isNew placeholder="Adicionar" />
              </TagsWrapper>
            </div>

            <div>
              <p>Preço</p>
              <Input type="number" placeholder="R$ 00,00" />
            </div>
          </SecondRow>
        
          <ThirdRow>
            <p>Descrição</p>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            <div>
              <Button title="Excluir prato" className="deleteButton" />
              <Button title= "Salvar Alterações" className="saveButton" />
            </div>
          </ThirdRow>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}