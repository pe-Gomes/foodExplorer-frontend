import { useEffect, useRef, useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { Container, Hero, Carousel, Gallery } from './styles'
import HomeImg from '../../assets/img-home.png'
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'
import { ReactComponent as RightArrow } from '../../assets/CaretRight.svg'

import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { Product } from '../../components/Product'

export function Home() {
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
          <button className="left-arrow web" onClick={handleToLeftMeal}>
            <LeftArrow />
          </button>
          <button className="right-arrow web" onClick={handleToRightMeal}>
            <RightArrow />
          </button>
          <Gallery ref={mealCarousel} isAdmin={admin}>
            {meal &&
              meal.map((entry) => (
                <Product
                  key={entry.id}
                  onClick={(e) => handleIconButton(e, entry)}
                  ProductObject={entry}
                />
              ))}
          </Gallery>
        </Carousel>
        <h2>Sobremesas</h2>
        <Carousel>
          <button className="left-arrow web" onClick={handleToLeftDessert}>
            <LeftArrow />
          </button>
          <button className="right-arrow web" onClick={handleToRightDessert}>
            <RightArrow />
          </button>
          <Gallery ref={dessertCarousel} isAdmin={admin}>
            {dessert &&
              dessert.map((entry) => (
                <Product
                  key={entry.id}
                  onClick={(e) => handleIconButton(e, entry)}
                  ProductObject={entry}
                />
              ))}
          </Gallery>
        </Carousel>

        <h2>Bebidas</h2>
        <Carousel>
          <button className="left-arrow web" onClick={handleToLeftDrink}>
            <LeftArrow />
          </button>
          <button className="right-arrow web" onClick={handleToRightDrink}>
            <RightArrow />
          </button>

          <Gallery ref={drinkCarousel} isAdmin={admin}>
            {drink &&
              drink.map((entry) => (
                <Product
                  key={entry.id}
                  onClick={(e) => handleIconButton(e, entry)}
                  ProductObject={entry}
                />
              ))}
          </Gallery>
        </Carousel>
      </main>
      <Footer />
    </Container>
  )
}
