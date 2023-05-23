/* eslint-disable no-redeclare */
import { useState } from 'react'
import { useShop } from '../../hooks/shopContext'

import { Container, AddRemove } from './styles'
import { ReactComponent as MinusIcon } from '../../assets/Minus.svg'
import { ReactComponent as PlusIcon } from '../../assets/Plus.svg'

import { Button } from '../Button'

export function AddProduct({
  title,
  children,
  handleRemoveItem,
  handleAddItem,
  ItemId,
  handleCartCallback,
}) {
  const [number, setNumber] = useState(1)
  const { updateItemsCart } = useShop()

  function handleCartCallback(e, ItemId) {
    e.preventDefault()
    updateItemsCart(ItemId, number)

    if (number === 0) {
      setNumber(1)
    }
  }

  function handleAddItem() {
    setNumber((prevState) => prevState + 1)
  }

  function handleRemoveItem() {
    if (number === 0) {
      setNumber(0)
    } else {
      setNumber((prevState) => prevState - 1)
    }
  }

  return (
    <Container>
      <AddRemove>
        <button onClick={handleRemoveItem}>
          <MinusIcon />
        </button>
        <span>{number}</span>
        <button onClick={handleAddItem}>
          <PlusIcon />
        </button>
      </AddRemove>
      <Button
        title={number === 0 ? 'excluir' : title}
        onClick={(e) => handleCartCallback(e, ItemId)}
        ItemId={ItemId}
      />
      {children}
    </Container>
  )
}
