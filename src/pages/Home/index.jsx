import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import { useNavigate, Link } from 'react-router-dom'

import { Container, Hero, Carousel, Gallery, Products } from './styles'
import HomeImg from '../../assets/imgs/img-home.png'
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'
import { ReactComponent as RightArrow } from '../../assets/CaretRight.svg'
import { ReactComponent as HeartIcon } from '../../assets/Heart.svg'
import { ReactComponent as PencilIcon } from '../../assets/Pencil.svg'
import { ReactComponent as FilledHeartIcon } from '../../assets/FilledHeart.svg'

import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { AddProductHome } from '../../components/AddProductHome'

export function Home({ handleAddItem, handleRemoveItem, handleCartCallback }) {
  const navigate = useNavigate()
  const { admin } = useAuth()
  const [data, setData] = useState([])

  const mealCarousel = useRef(null)
  const dessertCarousel = useRef(null)
  const drinkCarousel = useRef(null)

  const meal = data.meal
  const dessert = data.dessert
  const drink = data.drink

  async function handleIconButton(e, entry) {
    e.preventDefault()
    if (admin === true) {
      navigate(`/edit/${entry.id}`)
    } else {
      if (entry.favorites.length === 0) {
        await api.post(`/favorites?product_id=${entry.id}`)
      } else {
        await api.delete(`/favorites?product_id=${entry.id}`)
      }
    }
  }

  function handleToLeftMeal(e) {
    e.preventDefault()
    mealCarousel.current.scrollBy(-250, 0)
  }

  function handleToRightMeal(e) {
    e.preventDefault()
    mealCarousel.current.scrollBy(250, 0)
  }

  function handleToLeftDessert(e) {
    e.preventDefault()
    dessertCarousel.current.scrollBy(-250, 0)
  }

  function handleToRightDessert(e) {
    e.preventDefault()
    dessertCarousel.current.scrollBy(250, 0)
  }

  function handleToLeftDrink(e) {
    e.preventDefault()
    drinkCarousel.current.scrollBy(-250, 0)
  }

  function handleToRightDrink(e) {
    e.preventDefault()
    drinkCarousel.current.scrollBy(250, 0)
  }

  useEffect(() => {
    async function fetchProductsByCategory() {
      const res = await api.get('/categories')
      setData(res.data)
    }
    fetchProductsByCategory()
  }, [data])

  return (
    <Container>
      {admin === true ? <HeaderAdmin /> : <Header />}
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
          <button className="left-arrow" onClick={handleToLeftMeal}>
            <LeftArrow />
          </button>
          <button className="right-arrow" onClick={handleToRightMeal}>
            <RightArrow />
          </button>
          <Gallery ref={mealCarousel}>
            {meal &&
              meal.map((entry) => (
                <Products key={entry.id}>
                  <button
                    className={
                      admin === true ? 'iconButton' : 'iconButton heartIcon'
                    }
                    onClick={(e) => handleIconButton(e, entry)}
                  >
                    {admin === true ? (
                      <PencilIcon />
                    ) : entry.favorites.length === 0 ? (
                      <HeartIcon />
                    ) : (
                      <FilledHeartIcon />
                    )}
                  </button>
                  <Link to={`/details/${entry.id}`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${entry.image}`}
                      alt={`Foto de ${entry.title}`}
                    />
                    {`${entry.title} >`}
                  </Link>
                  <p>
                    {entry.description.length <= 58
                      ? entry.description
                      : entry.description.substring(0, 55).concat('...')}
                  </p>
                  <span>
                    {`R$ ${entry.price.toString().replace('.', ',')}`}
                  </span>
                  <div>
                    {admin === false && (
                      <AddProductHome
                        className="addProduct"
                        title="incluir"
                        // Calling functions created at the component AddProductHome
                        handleCartCallback={handleCartCallback}
                        ItemId={entry.id}
                        handleAddItem={handleAddItem}
                        handleRemoveItem={handleRemoveItem}
                      />
                    )}
                  </div>
                </Products>
              ))}
          </Gallery>
        </Carousel>
        <h2>Sobremesas</h2>
        <Carousel>
          <button className="left-arrow" onClick={handleToLeftDessert}>
            <LeftArrow />
          </button>
          <button className="right-arrow" onClick={handleToRightDessert}>
            <RightArrow />
          </button>
          <Gallery ref={dessertCarousel}>
            {dessert &&
              dessert.map((entry) => (
                <Products key={entry.id}>
                  <button
                    className={
                      admin === true ? 'iconButton' : 'iconButton heartIcon'
                    }
                    onClick={(e) => handleIconButton(e, entry)}
                  >
                    {admin === true ? (
                      <PencilIcon />
                    ) : entry.favorites.length === 0 ? (
                      <HeartIcon />
                    ) : (
                      <FilledHeartIcon />
                    )}
                  </button>
                  <Link to={`/details/${entry.id}`} key={`${entry.id}_link`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${entry.image}`}
                      alt={`Foto de ${entry.title}`}
                    />
                    {`${entry.title} >`}
                  </Link>
                  <p>
                    {entry.description.length <= 58
                      ? entry.description
                      : entry.description.substring(0, 55).concat('...')}
                  </p>
                  <span>
                    {`R$ ${entry.price.toString().replace('.', ',')}`}
                  </span>
                  <div>
                    {admin === false && (
                      <AddProductHome
                        className="addProduct"
                        title="incluir"
                        key={`${entry.id}_last_button}`}
                        // Calling functions created at the component AddProductHome
                        handleCartCallback={handleCartCallback}
                        ItemId={entry.id}
                        handleAddItem={handleAddItem}
                        handleRemoveItem={handleRemoveItem}
                      />
                    )}
                  </div>
                </Products>
              ))}
          </Gallery>
        </Carousel>

        <h2>Bebidas</h2>
        <Carousel>
          <button className="left-arrow" onClick={handleToLeftDrink}>
            <LeftArrow />
          </button>
          <button className="right-arrow" onClick={handleToRightDrink}>
            <RightArrow />
          </button>

          <Gallery ref={drinkCarousel}>
            {drink &&
              drink.map((entry) => (
                <Products key={entry.id}>
                  <button
                    className={
                      admin === true ? 'iconButton' : 'iconButton heartIcon'
                    }
                    onClick={(e) => handleIconButton(e, entry)}
                  >
                    {admin === true ? (
                      <PencilIcon />
                    ) : entry.favorites.length === 0 ? (
                      <HeartIcon />
                    ) : (
                      <FilledHeartIcon />
                    )}
                  </button>
                  <Link to={`/details/${entry.id}`} key={`${entry.id}_link`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${entry.image}`}
                      alt={`Foto de ${entry.title}`}
                    />
                    {`${entry.title} >`}
                  </Link>
                  <p>
                    {entry.description.length <= 58
                      ? entry.description
                      : entry.description.substring(0, 55).concat('...')}
                  </p>
                  <span>
                    {`R$ ${entry.price.toString().replace('.', ',')}`}
                  </span>
                  <div>
                    {admin === false && (
                      <AddProductHome
                        className="addProduct"
                        title="incluir"
                        key={`${entry.id}_last_button`}
                        // Calling functions created at the component AddProductHome
                        handleCartCallback={handleCartCallback}
                        ItemId={entry.id}
                        handleAddItem={handleAddItem}
                        handleRemoveItem={handleRemoveItem}
                      />
                    )}
                  </div>
                </Products>
              ))}
          </Gallery>
        </Carousel>
      </main>
      <Footer />
    </Container>
  )
}
