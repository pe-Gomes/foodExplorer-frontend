import { Container, AddRemove } from "./styles";
import { ReactComponent as PlusIcon } from '../../assets/Plus.svg'
import { ReactComponent as MinusIcon } from '../../assets/Minus.svg'

import { Button } from '../Button';

export function AddProductHome({ title, children, ...rest }) {
  return (
    <Container>
      <AddRemove>
        <button><MinusIcon /></button>
        <span>01</span>
        <button><PlusIcon /></button>
      </AddRemove>
      <Button title={title}/>
      {children}
    </Container>
  )
}