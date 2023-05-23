/* eslint-disable no-redeclare */
import { useEffect, useState } from 'react'
import { useShop } from '../../hooks/shopContext'

import { Container, AddRemove } from './styles'
import { ReactComponent as PlusIcon } from '../../assets/Plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/Minus.svg'

import { Button } from '../Button'

export function AddProductHome({
  title,
  handleAddItem,
  handleRemoveItem,
  ItemId,
  handleCartCallback,
  children,
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

  useEffect(() => {}, [])

  return (
    <Container key={`${ItemId}_add_remove_container`}>
      <AddRemove>
        <button>
          <MinusIcon onClick={handleRemoveItem} />
        </button>
        <span>{number}</span>
        <button onClick={handleAddItem}>
          <PlusIcon />
        </button>
      </AddRemove>
      <Button
        title={number === 0 ? 'excluir' : 'incluir'}
        onClick={(e) => handleCartCallback(e, ItemId)}
        Itemid={ItemId}
      />
      {children}
    </Container>
  )
}
