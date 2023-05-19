import { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Listbox } from '@headlessui/react'

import {
  Container,
  Form,
  FirstRow,
  SecondRow,
  InputWrapper,
  TagsWrapper,
  ThirdRow,
  Select,
} from './styles'
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'
import { ReactComponent as UploadIcon } from '../../assets/Upload.svg'
import { ReactComponent as DownArrow } from '../../assets/CaretDown.svg'
import { ReactComponent as CheckIcon } from '../../assets/Check.svg'

import { HeaderAdmin } from '../../components/HeaderAdmin'
import { IconButton } from '../../components/IconButton'
import { Input } from '../../components/Input'
import { TagButton } from '../../components/TagButton'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

const options = [
  { value: 'meal', name: 'Refeição', unavailable: false },
  { value: 'drink', name: 'Bebida', unavailable: false },
  { value: 'dessert', name: 'Sobremesa', unavailable: false },
]

export function New() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState(options[0])
  const [price, setPrice] = useState('')
  const [imageFile, setImageFile] = useState(null)

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleBack() {
    navigate(-1)
  }

  function handleImage(event) {
    const file = event.target.files[0]
    const fileUploadForm = new FormData()
    fileUploadForm.append('image', file)
    setImageFile(fileUploadForm)
  }

  function handleNewTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleDeleteTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleCreateProduct() {
    if (!title || !tags || !description || !price) {
      return alert(
        'Preencha os campos do título, ingredientes, preço e categoria para cadastrar o produto.',
      )
    }

    if (newTag) {
      return alert(
        'Existem ingredientes que ainda não foram adicionados. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    if (imageFile !== null) {
      const response = await api.patch('/files', imageFile)
      await api.post('/products', {
        title,
        description,
        price,
        ingredients: tags,
        category: category.value,
        image: response.data.image,
      })
    } else {
      await api.post('/products', {
        title,
        description,
        price,
        ingredients: tags,
        category: category.value,
      })
    }

    alert('Produto Cadastrado com sucesso!')
    handleBack()
  }

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <header>
          <IconButton icon={LeftArrow} title="voltar" onClick={handleBack} />
        </header>
        <h1>Adicionar prato</h1>
        <Form>
          <FirstRow>
            <InputWrapper className="fileInput">
              <p>Imagem do prato</p>
              <label htmlFor="image">
                <UploadIcon /> Selecione imagem
              </label>
              <input type="file" id="image" onChange={handleImage} />
            </InputWrapper>

            <InputWrapper>
              <p>Nome</p>
              <Input
                type="text"
                placeholder="Ex.: Salada Ceasar"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <p>Categoria</p>
              <Select>
                <Listbox value={category} onChange={setCategory}>
                  <Listbox.Button className="Listbox-Button">
                    {category.name}
                    <DownArrow aria-hidden="true" />
                  </Listbox.Button>
                  <Listbox.Options className="Listbox-options">
                    {options &&
                      options.map((option) => (
                        <Listbox.Option
                          className="Listbox-option"
                          key={option.value}
                          value={option}
                          disabled={option.unavailable}
                          as={Fragment}
                        >
                          <li>
                            {category.name === option.name && <CheckIcon />}
                            {option.name}
                          </li>
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                </Listbox>
              </Select>
            </InputWrapper>
          </FirstRow>

          <SecondRow>
            <div>
              <p>Ingredientes</p>
              <TagsWrapper>
                {tags.map((tag, index) => (
                  <TagButton
                    key={String(index)}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                    readOnly
                  />
                ))}
                <TagButton
                  isNew
                  value={newTag}
                  onClick={handleNewTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
              </TagsWrapper>
            </div>

            <div>
              <p>Preço</p>
              <Input
                type="number"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </SecondRow>

          <ThirdRow>
            <p>Descrição</p>
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>
              <Button
                title="Salvar Alterações"
                className="saveButton"
                onClick={handleCreateProduct}
              />
            </div>
          </ThirdRow>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
