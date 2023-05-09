import { useEffect, useState } from "react";

import { Container, AddRemove } from "./styles";
import { ReactComponent as PlusIcon } from '../../assets/Plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/Minus.svg'

import { Button } from '../Button';

export function AddProductHome({ title, children }) {
  const [number, setNumber] = useState("1");

  function handleAddButton() {
    setNumber( prevState => {
      let toNumber = Number(prevState)
      ++toNumber
      return toNumber.toString();
    })
  }

  function handleRemoveButton() {
    setNumber( prevState => {
      let toNumber = Number(prevState)
      if (toNumber > 0) {
        --toNumber
      } else {
        toNumber = 0
      }
      return toNumber.toString();
    })
  }

  useEffect( () => {
  }, [number])

  return (
    <Container >
      <AddRemove>
        <button><MinusIcon onClick={handleRemoveButton} /></button>
        <span>{number}</span>
        <button onClick={handleAddButton}><PlusIcon /></button>
      </AddRemove>
      <Button title={title}/>
      {children}
    </Container>
  )
}