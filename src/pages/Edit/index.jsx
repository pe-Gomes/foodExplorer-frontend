import { useState, useEffect, Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'

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

import { Listbox } from '@headlessui/react'
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

export function Edit() {
  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [title, setTitle] = useState(data.title)
  const [description, setDescription] = useState(data.description)
  const [price, setPrice] = useState(data.price)
  const [imageFile, setImageFile] = useState()
  const [imagePath, setImagePath] = useState(data.image)

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleBack() {
    navigate(-1)
  }

  function handleNewTag() {
    if (!newTag) {
      alert('Adicione um ingrediente para depois cadastrá-lo')
      return
    }
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleDeleteTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleUpdateProduct() {
    try {
      if (imageFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', imageFile)

        const response = await api.patch(
          `/products/${params.id}/image`,
          fileUploadForm,
        )
        setImagePath(response.data.image)
      }

      await api.put(`/products/${params.id}`, {
        title,
        description,
        price,
        ingredients: tags,
        category: category.value,
        image: imagePath,
      })

      alert('Produto atualizado com sucesso!')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o produto.')
      }
    }
  }

  async function handleDelete() {
    const confirm = window.confirm('Você realmente deseja remover o produto?')

    if (confirm) {
      await api.delete(`/products/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`)
      const ingredients = response.data.ingredients.map(
        (ingredient) => ingredient.name,
      )
      let inicialCategory = {}

      for (let i = 0; i < options.length; i++) {
        if (options[i].value === response.data.category[0].name) {
          inicialCategory = options[i]
        }
      }

      setData(response.data)
      setCategory(inicialCategory)
      setTags(ingredients)
    }

    fetchProduct()
  }, [params.id])

  return (
    <Container>
      <HeaderAdmin />
      <main>
        <div className="return">
          <IconButton icon={LeftArrow} title="voltar" onClick={handleBack} />
        </div>
        <h1>Editar prato</h1>
        <Form>
          <FirstRow>
            <InputWrapper className="fileInput">
              <p>Imagem do prato</p>
              <label htmlFor="image">
                <UploadIcon /> Selecione imagem
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </InputWrapper>

            <InputWrapper>
              <p>Nome</p>
              <Input
                type="text"
                placeholder={data.title}
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
                {tags &&
                  tags.map((tag, index) => (
                    <TagButton
                      key={index}
                      value={tag}
                      onClick={() => handleDeleteTag(tag)}
                      readOnly
                    />
                  ))}
                <TagButton
                  isNew
                  placeholder="Adicionar"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleNewTag}
                />
              </TagsWrapper>
            </div>

            <div>
              <p>Preço</p>
              <Input
                type="number"
                placeholder={`R$ ${data.price}`}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </SecondRow>

          <ThirdRow>
            <p>Descrição</p>
            <TextArea
              placeholder={data.description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div>
              <Button
                title="Excluir prato"
                className="deleteButton"
                onClick={handleDelete}
              />
              <Button
                title="Salvar Alterações"
                className="saveButton"
                onClick={handleUpdateProduct}
              />
            </div>
          </ThirdRow>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
