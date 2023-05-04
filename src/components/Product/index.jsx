import { Container } from "./styles";

import { AddProductHome } from '../../components/AddProductHome';
import { IconButton } from "../IconButton";
import { ReactComponent as HeartIcon } from '../../assets/Heart.svg';

export function Product({ src: Src, productName, isActive, productDescription, productPrice, ...rest}) {
  return (
    <Container>
      <IconButton icon={HeartIcon} className="heartButton" isActive={isActive} />
      <a>
        <img src={Src} />
        {productName}
      </a>
      <p>{productDescription}</p>
      <span>{productPrice}</span>
      <div>
        <AddProductHome {...rest} className="addProduct" title="incluir" />
      </div>
    </Container>
  )
}