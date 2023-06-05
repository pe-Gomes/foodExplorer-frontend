import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const ShopContext = createContext()

function ShopProvider({ children }) {
  const inicialCartData = () => {
    const cart = JSON.parse(localStorage.getItem('@food-explorer:cart'))

    if (!cart) {
      return []
    }

    return cart.filter((product) => product.addedItems !== 0)
  }

  const [numberOfItemsOnCart, setNumberOfItemsOnCart] =
    useState(getInicialCartNumber)
  const [cartData, setCartData] = useState(inicialCartData)

  function updateItemsCart(itemId, number) {
    const cart = localStorage.getItem('@food-explorer:cart')
    const parseCart = JSON.parse(cart)

    const selected = parseCart.filter((item) => item.product_id === itemId)
    const rest = parseCart.filter((item) => item.product_id !== itemId)

    const result = [
      ...rest,
      {
        product_id: selected[0].product_id,
        title: selected[0].title,
        price: selected[0].price,
        image: selected[0].image,
        addedItems: number,
      },
    ]

    let sumOfItems = 0

    for (let i = 0; i < result.length; i++) {
      sumOfItems += result[i].addedItems
    }

    setNumberOfItemsOnCart(sumOfItems)
    localStorage.setItem('@food-explorer:cart', JSON.stringify(result))
    handleCartData()
  }

  function getInicialCartNumber() {
    const cart = JSON.parse(localStorage.getItem('@food-explorer:cart'))

    if (!cart) return 0

    let sumOfItems = 0

    for (let i = 0; i < cart.length; i++) {
      sumOfItems += cart[i].addedItems
    }
    return sumOfItems
  }

  function handleCartData() {
    const cart = localStorage.getItem('@food-explorer:cart')
    const parseCart = JSON.parse(cart)

    const productsOnCart = parseCart.filter(
      (product) => product.addedItems !== 0,
    )

    setCartData(productsOnCart)
  }

  useEffect(() => {
    async function fetchDefaultCart() {
      let cart = localStorage.getItem('@food-explorer:cart')

      if (!cart) {
        const res = await api.get('/products')
        const allProducts = res.data

        cart = allProducts.map((product) => ({
          product_id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          addedItems: 0,
        }))

        localStorage.setItem('@food-explorer:cart', JSON.stringify(cart))
      }
    }
    fetchDefaultCart()
    getInicialCartNumber()
  }, [])

  return (
    <ShopContext.Provider
      value={{
        updateItemsCart,
        cartData,
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
