import { Container } from "./styles";
import { useAuth } from '../../hooks/auth';

import { Link } from "react-router-dom";

import { AddProductHome } from '../../components/AddProductHome';
import { ReactComponent as HeartIcon } from '../../assets/Heart.svg';
import { ReactComponent as PencilIcon } from '../../assets/Pencil.svg';

export function Product({ 
  src: Src, productName, productDescription, numberOfProducts, productPrice, onClick, to:To, ...rest
}) {
    const { admin } = useAuth();

  return (
    <Container {...rest} >
      <Link className="iconButton" to={To}>{admin ? <PencilIcon /> : <HeartIcon />}</Link>
      <Link to={To}>
        <img src={Src} />
        {productName}
      </Link>
      <p>{productDescription}</p>
      <span>{productPrice}</span>
      <div>
        { admin ? <></> : <AddProductHome {...rest} className="addProduct" title="incluir" />}
      </div>
    </Container>
  )
}