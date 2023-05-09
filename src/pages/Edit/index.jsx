import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

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
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState([]);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [price, setPrice] = useState(data.price);
  const [imageFile, setImageFile] = useState([]);
  const [imagePath, setImagePath] = useState(data.image)
  const [categoryValue, setCategoryValue] = useState(data.category);
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleBack() {
    navigate(-1);
  }
  
  function handleNewTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleUpdateProduct() {
    try {
      
      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);

        const response = await api.patch(`/products/${params.id}/image`, fileUploadForm);
        setImagePath(response.data.image);
      }

      await api.put(`/products/${params.id}`, {
        title,
        description,
        price,
        ingredients: tags,
        category: categoryValue,
        image: imagePath
      })

      alert("Produto atualizado com sucesso!");
      navigate(-1);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o produto.")
      };
    };
  };

  async function handleDelete() {
    const confirm = window.confirm("Você realmente deseja remover o produto?");

    if (confirm) {
      await api.delete(`/products/${params.id}`);
      navigate(-1);
    }
  }

  useEffect( () => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      const ingredients = response.data.ingredients.map(ingredient => ingredient.name)
      setData(response.data);
      setTags(ingredients)
    }
    fetchProduct();
  }, [])

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <header>
          <IconButton icon={LeftArrow} title="voltar" onClick={handleBack} />
        </header>
        <h1>Editar prato</h1>
        <Form>
          <FirstRow>
            <InputWrapper className="fileInput"> 
              <p>Imagem do prato</p>
              <label htmlFor="image">
                <UploadIcon /> Selecione imagem
              </label>
              <input type="file" id="image" onChange={ e => setImageFile(e.target.files[0])} />
            </InputWrapper>
            
            <InputWrapper>
              <p>Nome</p>
              <Input type="text" placeholder={data.title} onChange={e => setTitle(e.target.value)} />
            </InputWrapper>

            <InputWrapper>
              <p>Categoria</p>
              <select htmlFor="categories-select" onChange={e => setCategoryValue(e.target.value)} value={categoryValue} >
                <option value="meal">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drink">Bebidas</option>
              </select>
            </InputWrapper>

          </FirstRow>

          <SecondRow>
            <div>
              <p>Ingredientes</p>
              <TagsWrapper>
                { 
                  tags && tags.map( (tag, index) => (
                    <TagButton 
                      key={index}
                      value={tag}
                      onClick={ () => handleDeleteTag(tag)}
                      readOnly
                    />
                  ))
                }
                <TagButton
                  isNew 
                  placeholder="Adicionar"
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleNewTag}
                />
              </TagsWrapper>
            </div>

            <div>
              <p>Preço</p>
              <Input type="number" placeholder={`R$ ${data.price}`} onChange={e => setPrice(e.target.value)} />
            </div>
          </SecondRow>
        
          <ThirdRow>
            <p>Descrição</p>
            <TextArea placeholder={data.description} onChange={ e => setDescription(e.target.value) } />
            <div>
              <Button title="Excluir prato" className="deleteButton" onClick={handleDelete} />
              <Button title= "Salvar Alterações" className="saveButton" onClick={handleUpdateProduct} />
            </div>
          </ThirdRow>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}