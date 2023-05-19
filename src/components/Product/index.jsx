import { useEffect, useRef } from 'react'
import { Container } from './styles'
import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom'

import { AddProductHome } from '../../components/AddProductHome'
import { ReactComponent as HeartIcon } from '../../assets/Heart.svg'
import { ReactComponent as PencilIcon } from '../../assets/Pencil.svg'

export function Product({
  src: Src,
  productName,
  productDescription,
  numberOfProducts,
  productPrice,
  onClick,
  to: To,
  ...rest
}) {
  const { admin } = useAuth()
  const heart = useRef(null)

  function handleIsActive() {
    heart.current.classList.toggle('isActive')
  }

  return (
    <Container {...rest}>
      <button
        ref={heart}
        className={admin == 1 ? 'iconButton' : 'iconButton heartIcon'}
        onClick={(event) => {
          handleIsActive()
          onclick
        }}
      >
        {admin == 1 ? <PencilIcon /> : <HeartIcon />}
      </button>
      <Link to={To}>
        <img src={Src} />
        {productName}
      </Link>
      <p>{productDescription}</p>
      <span>{productPrice}</span>
      <div>
        {admin == 1 ? (
          <></>
        ) : (
          <AddProductHome className="addProduct" title="incluir" />
        )}
      </div>
    </Container>
  )
}
