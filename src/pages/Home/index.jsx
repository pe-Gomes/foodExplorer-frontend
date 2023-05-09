import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Container, Hero, Carousel, Gallery } from './styles';
import HomeImg from '../../assets/imgs/img-home.png';
import { ReactComponent as LeftArrow} from '../../assets/CaretLeft.svg';
import { ReactComponent as RightArrow} from '../../assets/CaretRight.svg';

import { Header } from '../../components/Header';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { Footer } from '../../components/Footer';
import { Product } from '../../components/Product';

export function Home() {
  const { admin } = useAuth();
  const navigate = useNavigate();

  const mealCarousel = useRef(null);
  const dessertCarousel = useRef(null);
  const drinkCarousel = useRef(null);
  
  const [meal, setMeal] = useState([]);
  const [mealPrices, setMealPrices] = useState([]);
  const [drink, setDrink] = useState([]);
  const [drinkPrices, setDrinkPrices] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [dessertPrices, setDessertPrices] = useState([]);

  function handleEditButton(event,entry) {
    event.preventDefault();
    navigate(`/edit/${entry.product[0].id}`)
  }

  function handleToLeftMeal(e) {
    console.log(e);
    e.preventDefault();
    mealCarousel.current.scrollBy(-250, 0);
  }

  function handleToRightMeal(e) {
    e.preventDefault();
    mealCarousel.current.scrollBy(250, 0);
  }

  function handleToLeftDessert(e) {
    console.log(e);
    e.preventDefault();
    dessertCarousel.current.scrollBy(-250, 0);
  }

  function handleToRightDessert(e) {
    e.preventDefault();
    dessertCarousel.current.scrollBy(250, 0);
  }

  const handleToLeftDrink = e => {
    console.log(e)
    e.preventDefault();
    drinkCarousel.current.scrollBy(-250, 0)
  };

  const handleToRightDrink = e => {
    e.preventDefault();
    drinkCarousel.current.scrollBy(250, 0)
  };
  

  useEffect( () => {
    async function fetchProductsByCategory() {
      const resMeal = await api.get("/categories?category=meal");
      setMeal(resMeal.data);
      
      const resDrinks = await api.get("/categories?category=drink")
      setDrink(resDrinks.data);
  
      const resDessert = await api.get("/categories?category=dessert")
      setDessert(resDessert.data);

      handlePrices()
    }
  
    function handlePrices() {
      const fetchMealPrices = meal.map((entry) => entry.product[0].price.toString());
      const mealPricesDisplay = fetchMealPrices.map( price => price.replace(".", ",")) 
         
      setMealPrices(mealPricesDisplay);
  
      const fetchDrinkPrices = drink.map((entry) => entry.product[0].price.toString());
      const drinkPricesDisplay = fetchDrinkPrices.map( price => price.replace(".", ",")) 
         
      setDrinkPrices(drinkPricesDisplay);
  
      const fetchDessertPrices = dessert.map((entry) => entry.product[0].price.toString());
      const dessertPricesDisplay = fetchDessertPrices.map( price => price.replace(".", ",")) 
         
      setDessertPrices(dessertPricesDisplay);
    }

    fetchProductsByCategory();

    
  }, [mealPrices, drinkPrices, dessertPrices]);
  return (
    <Container>
      { admin ? <HeaderAdmin /> : <Header /> }
      <main>
        <Hero>
          <img src={HomeImg} alt="Doces e frutas coloridas flutuando no ar" />
          <div className="styledBg">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <h2>Refeições</h2>
        <Carousel >
          <button className="left-arrow" onClick={handleToLeftMeal} ><LeftArrow /></button>
          <button className="right-arrow" onClick={handleToRightMeal}><RightArrow /></button>
          <Gallery ref={mealCarousel} onLoad={self => self.scrollLeft(-250,0)} >
            {
              meal && meal.map( (entry, index) => ( 
                <Product
                key={`${index}_${entry.id}`}
                className="product"
                src={`${api.defaults.baseURL}/files/${entry.product[0].image}`}
                productName={`${entry.product[0].title} >`}
                productDescription={entry.product[0].description}
                productPrice={`R$ ${mealPrices[index]}`}
                to={`/details/${entry.product[0].id}`}
                
                />
              ))
            }
          </Gallery>
        </Carousel>
        <h2>Sobremesas</h2>
        <Carousel >
          <button className="left-arrow" onClick={handleToLeftDessert} ><LeftArrow /></button>
          <button className="right-arrow" onClick={handleToRightDessert} ><RightArrow /></button>
          <Gallery ref={dessertCarousel} >
            {
              dessert && dessert.map( (entry, index) => ( 
                <Product
                key={`${toString(index)}_${entry.product[0].id}`}
                className="product"
                src={`${api.defaults.baseURL}/files/${entry.product[0].image}`}
                productName={`${entry.product[0].title} >`}
                productDescription={entry.product[0].description}
                productPrice={`R$ ${dessertPrices[index]}`}
                to={`/details/${entry.product[0].id}`}
                onClick={handleEditButton}
                />
              ))
            }
          </Gallery>
        </Carousel>

        <h2>Bebidas</h2>
        <Carousel>
          <button className="left-arrow" onClick={handleToLeftDrink} ><LeftArrow /></button>
          <button className="right-arrow" onClick={handleToRightDrink} ><RightArrow /></button>
          
          <Gallery ref={drinkCarousel} >
            {
              drink && drink.map( (entry, index) => ( 
                <Product
                key={`${index}_${entry.product[0].id}`}
                className="product"
                src={`${api.defaults.baseURL}/files/${entry.product[0].image}`}
                productName={`${entry.product[0].title} >`}
                productDescription={entry.product[0].description}
                productPrice={`R$ ${drinkPrices[index]}`}
                to={`/details/${entry.product[0].id}`}
                />
              ))
              }
          </Gallery>
         
        </Carousel>

      </main>
      <Footer />
    </Container>
  )
}