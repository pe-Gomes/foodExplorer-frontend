import { useRef } from 'react'
import { useAuth } from '../../hooks/auth'
import { useShop } from '../../hooks/shopContext'

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
  const { meal, mealPrices, drink, drinkPrices, dessert, dessertPrices } =
    useShop()

  const mealCarousel = useRef(null)
  const dessertCarousel = useRef(null)
  const drinkCarousel = useRef(null)

  async function handleIconButton(e, entry) {
    e.preventDefault()
    if (admin == 1) {
      navigate(`/edit/${entry.id}`)
    } else {
      if (entry.favorites.length == 0) {
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

  return (
    <Container>
      {admin == 1 ? <HeaderAdmin /> : <Header />}
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
              meal.map((entry, index) => (
                <>
                  <Products key={`${entry.id}_root`}>
                    <button
                      className={
                        admin == 1 ? 'iconButton' : 'iconButton heartIcon'
                      }
                      onClick={(e) => handleIconButton(e, entry)}
                      key={`${entry.id}_first_button`}
                    >
                      {admin == 1 ? (
                        <PencilIcon key={`${entry.id}_icon_button1`} />
                      ) : entry.favorites.length == 0 ? (
                        <HeartIcon key={`${entry.id}_icon_button2`} />
                      ) : (
                        <FilledHeartIcon key={`${entry.id}_icon_button3`} />
                      )}
                    </button>
                    <Link
                      to={`/details/${entry.id}`}
                      key={`${entry.id}_link_details`}
                    >
                      <img
                        src={`${api.defaults.baseURL}/files/${entry.image}`}
                        key={`${entry.id}_img`}
                      />
                      {`${entry.title} >`}
                    </Link>
                    <p key={`${entry.id}_description`}>{entry.description}</p>
                    <span
                      key={`${entry.id}_price`}
                    >{`R$ ${mealPrices[index]}`}</span>
                    <div key={`${entry.id}_div_button`}>
                      {admin == 1 ? (
                        <></>
                      ) : (
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
                </>
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
              dessert.map((entry, index) => (
                <>
                  <Products key={`${entry.id}_root`}>
                    <button
                      className={
                        admin == 1 ? 'iconButton' : 'iconButton heartIcon'
                      }
                      key={`${entry.id}_first_button`}
                      onClick={(e) => handleIconButton(e, entry)}
                    >
                      {admin == 1 ? (
                        <PencilIcon key={`${entry.id}_icon_button1`} />
                      ) : entry.favorites.length == 0 ? (
                        <HeartIcon key={`${entry.id}_icon_button2`} />
                      ) : (
                        <FilledHeartIcon key={`${entry.id}_icon_button3`} />
                      )}
                    </button>
                    <Link to={`/details/${entry.id}`} key={`${entry.id}_link`}>
                      <img
                        src={`${api.defaults.baseURL}/files/${entry.image}`}
                        key={`${entry.id}_img`}
                      />
                      {`${entry.title} >`}
                    </Link>
                    <p key={`${entry.id}_${entry.description}`}>
                      {entry.description}
                    </p>
                    <span key={`${entry.id}_${entry.price}`}>
                      {`R$ ${dessertPrices[index]}`}
                    </span>
                    <div key={`${entry}_${entry.id}_button_div`}>
                      {admin == 1 ? (
                        <></>
                      ) : (
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
                </>
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
              drink.map((entry, index) => (
                <>
                  <Products key={`${entry.id}_root`}>
                    <button
                      className={
                        admin == 1 ? 'iconButton' : 'iconButton heartIcon'
                      }
                      key={`${entry.id}_first_button`}
                      onClick={(e) => handleIconButton(e, entry)}
                    >
                      {admin == 1 ? (
                        <PencilIcon key={`${entry.id}_icon_button1`} />
                      ) : entry.favorites.length == 0 ? (
                        <HeartIcon key={`${entry.id}_icon_button2`} />
                      ) : (
                        <FilledHeartIcon key={`${entry.id}_icon_button3`} />
                      )}
                    </button>
                    <Link to={`/details/${entry.id}`} key={`${entry.id}_link`}>
                      <img
                        src={`${api.defaults.baseURL}/files/${entry.image}`}
                        key={`${entry.id}_img`}
                      />
                      {`${entry.title} >`}
                    </Link>
                    <p key={`${entry.id}_description`}>{entry.description}</p>
                    <span
                      key={`${entry.id}_price`}
                    >{`R$ ${drinkPrices[index]}`}</span>
                    <div key={`${entry.id}_div_button`}>
                      {admin == 1 ? (
                        <></>
                      ) : (
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
                </>
              ))}
          </Gallery>
        </Carousel>
      </main>
      <Footer />
    </Container>
  )
}
