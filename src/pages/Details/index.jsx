import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Container, Information } from './styles'
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'

import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { IconButton } from '../../components/IconButton'
import { Tags } from '../../components/Tags'
import { AddProduct } from '../../components/AddProduct'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

export function Details({
  handleRemoveItem,
  handleAddItem,
  ItemId,
  handleCartCallback,
}) {
  const { admin } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState([])
  const [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState([])

  function handleEdit() {
    navigate(`/edit/${params.id}`)
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`)
      const resPrice = response.data.price.toString()
      const displayPrice = resPrice.replace('.', ',')

      setIngredients(response.data.ingredients)
      setPrice(displayPrice)
      setData(response.data)
    }
    fetchProduct()
  }, [])

  return (
    <Container>
      {admin ? <HeaderAdmin /> : <Header />}
      <main>
        <header>
          <IconButton icon={LeftArrow} title="voltar" onClick={handleBack} />
        </header>
        <div>
          {data && (
            <>
              <img
                src={`${api.defaults.baseURL}/files/${data.image}`}
                alt={`Uma foto de(a) ${data.title}`}
              />
              <Information>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <div className="tags">
                  {ingredients.map((ingredient) => (
                    <Tags title={ingredient.name} className="tags" />
                  ))}
                </div>
                {admin ? (
                  <Button title="Editar prato" onClick={handleEdit} />
                ) : (
                  <AddProduct
                    title={`incluir ∙ R$ ${price}`}
                    handleRemoveItem={handleRemoveItem}
                    handleAddItem={handleAddItem}
                    handleCartCallback={handleCartCallback}
                    ItemId={data.id}
                  />
                )}
              </Information>
            </>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  )
}
