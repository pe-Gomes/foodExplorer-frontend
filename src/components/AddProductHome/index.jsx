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
  const { updateItemsCart, displayNumberInCart } = useShop()

  function handleCartCallback(e, ItemId) {
    e.preventDefault()
    updateItemsCart(ItemId, number)
  }

  function handleAddItem() {
    setNumber(number + 1)
  }

  function handleRemoveItem() {
    let count
    if (number == 1) {
      count = 1
    } else {
      setNumber(number - 1)
    }
  }

  useEffect(() => {}, [])

  return (
    <Container key={`${ItemId}_add_remove_root`}>
      <AddRemove key={`${ItemId}_add_remove`}>
        <button key={`${ItemId}_add_remove_button_minus`}>
          <MinusIcon
            onClick={handleRemoveItem}
            key={`${ItemId}_add_remove_icon_minus`}
          />
        </button>
        <span key={`${ItemId}_add_remove_numbers`}>{number}</span>
        <button
          onClick={handleAddItem}
          key={`${ItemId}_add_remove_button_plus`}
        >
          <PlusIcon key={`${ItemId}_add_remove_icon_plus`} />
        </button>
      </AddRemove>
      <Button
        title={title}
        onClick={(e) => handleCartCallback(e, ItemId)}
        Itemid={ItemId}
        key={`${ItemId}_add_remove_button_update_numbers`}
      />
      {children}
    </Container>
  )
}
