import { Container, AddRemove } from "./styles";
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'
import { ReactComponent as RightArrow } from '../../assets/CaretRight.svg'

import { Button } from '../Button';

export function AddProduct({ title, children, ...rest }) {
  return (
    <Container>
      <AddRemove>
        <button><LeftArrow /></button>
        <span>01</span>
        <button><RightArrow /></button>
      </AddRemove>
      <Button title={title}/>
      {children}
    </Container>
  )
}