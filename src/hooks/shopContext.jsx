import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const ShopContext = createContext()

function ShopProvider({ children }) {
  const [numberOfItemsOnCart, setNumberOfItemsOnCart] = useState(0)

  function updateItemsCart(itemId, number) {
    const cart = localStorage.getItem('@food-explorer:cart')
    const parseCart = JSON.parse(cart)

    const selected = parseCart.filter((item) => item.product_id === itemId)
    const rest = parseCart.filter((item) => item.product_id !== itemId)

    const result = [
      ...rest,
      {
        product_id: selected[0].product_id,
        price: selected[0].price,
        addedItems: number,
      },
    ]

    let sumOfItems = 0

    for (let i = 0; i < result.length; i++) {
      sumOfItems += result[i].addedItems
    }

    setNumberOfItemsOnCart(sumOfItems)

    localStorage.setItem('@food-explorer:cart', JSON.stringify(result))
  }

  useEffect(() => {
    async function fetchDefaultCart() {
      let cart = localStorage.getItem('@food-explorer:cart')

      if (!cart) {
        const res = await api.get('/products')
        const allProducts = res.data

        cart = allProducts.map((product) => ({
          product_id: product.id,
          price: product.price,
          addedItems: 0,
        }))

        localStorage.setItem('@food-explorer:cart', JSON.stringify(cart))
      }
    }
    fetchDefaultCart()
  }, [])

  return (
    <ShopContext.Provider
      value={{
        updateItemsCart,
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
