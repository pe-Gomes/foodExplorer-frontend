/* eslint-disable no-redeclare */
import { useState } from 'react'
import { useShop } from '../../hooks/shopContext'

import { Container, AddRemove } from './styles'
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'
import { ReactComponent as RightArrow } from '../../assets/CaretRight.svg'

import { Button } from '../Button'

export function AddProduct({
  title,
  children,
  handleRemoveItem,
  handleAddItem,
  ItemId,
  handleCartCallback,
  ...rest
}) {
  const [number, setNumber] = useState(1)
  const { updateItemsCart } = useShop()

  function handleCartCallback(e, ItemId) {
    e.preventDefault()
    updateItemsCart(ItemId, number)
  }

  function handleAddItem() {
    setNumber(number + 1)
  }

  function handleRemoveItem() {
    if (number === 1) {
      setNumber(1)
    } else {
      setNumber(number - 1)
    }
  }

  return (
    <Container>
      <AddRemove>
        <button onClick={handleRemoveItem}>
          <LeftArrow />
        </button>
        <span>{number}</span>
        <button onClick={handleAddItem}>
          <RightArrow />
        </button>
      </AddRemove>
      <Button
        title={title}
        onClick={(e) => handleCartCallback(e, ItemId)}
        ItemId={ItemId}
      />
      {children}
    </Container>
  )
}
