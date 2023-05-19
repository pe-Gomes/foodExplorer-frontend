import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const ShopContext = createContext()

function ShopProvider({ children }) {
  const [numberOfItemsOnCart, setNumberOfItemsOnCart] = useState(0)

  const [data, setData] = useState([])
  const [meal, setMeal] = useState([])
  const [mealPrices, setMealPrices] = useState('Carregando...')
  const [drink, setDrink] = useState([])
  const [drinkPrices, setDrinkPrices] = useState('Carregando...')
  const [dessert, setDessert] = useState([])
  const [dessertPrices, setDessertPrices] = useState('Carregando...')

  function updateItemsCart(itemId, number) {
    const cart = localStorage.getItem('@food-explorer:cart')

    const parseCart = JSON.parse(cart)

    const selected = parseCart.filter((item) => item.product_id == itemId)
    const rest = parseCart.filter((item) => item.product_id !== itemId)

    const result = [
      ...rest,
      {
        product_id: selected[0].product_id,
        addedItems: number,
      },
    ]

    return localStorage.setItem('@food-explorer:cart', JSON.stringify(result))
  }

  function displayNumberInCart() {
    const cart = localStorage.getItem('@food-explorer:cart')
    const parseCart = JSON.parse(cart)

    let sumOfItems = 0

    for (let i = 0; i < parseCart.length; i++) {
      sumOfItems += parseCart[i].addedItems
    }
    setNumberOfItemsOnCart(sumOfItems)
  }

  useEffect(() => {
    async function fetchDefaultCart() {
      let cart = localStorage.getItem('@food-explorer:cart')

      if (!cart) {
        const res = await api.get('/products?search&all=all')
        const allProducts = res.data

        cart = allProducts.map((product) => ({
          product_id: product.id,
          addedItems: 0,
        }))

        localStorage.setItem('@food-explorer:cart', JSON.stringify(cart))
      }
      displayNumberInCart()
    }

    function displayNumberInCart() {
      const cart = localStorage.getItem('@food-explorer:cart')
      const parseCart = JSON.parse(cart)

      let sumOfItems = 0

      for (let i = 0; i < parseCart.length; i++) {
        sumOfItems += parseCart[i].addedItems
      }

      setNumberOfItemsOnCart(sumOfItems)
    }

    async function fetchProductsByCategory() {
      const res = await api.get('/categories')
      setData(res.data)
      setMeal(res.data.meal)
      setDrink(res.data.drink)
      setDessert(res.data.dessert)

      handlePrices()
    }

    function handlePrices() {
      const fetchMealPrices = meal.map((entry) => entry.price.toString())
      const mealPricesDisplay = fetchMealPrices.map((price) =>
        price.replace('.', ','),
      )

      setMealPrices(mealPricesDisplay)

      const fetchDrinkPrices = drink.map((entry) => entry.price.toString())
      const drinkPricesDisplay = fetchDrinkPrices.map((price) =>
        price.replace('.', ','),
      )

      setDrinkPrices(drinkPricesDisplay)

      const fetchDessertPrices = dessert.map((entry) => entry.price.toString())
      const dessertPricesDisplay = fetchDessertPrices.map((price) =>
        price.replace('.', ','),
      )

      setDessertPrices(dessertPricesDisplay)
    }
    fetchProductsByCategory()
    fetchDefaultCart()
    // console.log(mealPrices, drinkPrices, dessertPrices)
  }, [mealPrices, drinkPrices, dessertPrices])

  return (
    <ShopContext.Provider
      value={{
        updateItemsCart,
        displayNumberInCart,
        data,
        meal,
        mealPrices,
        drink,
        drinkPrices,
        dessert,
        dessertPrices,
        numberOfItemsOnCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

function useShop() {
  const context = useContext(ShopContext)
  return context
}

export { useShop, ShopProvider }
