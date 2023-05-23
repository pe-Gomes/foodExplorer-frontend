import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

import { Container } from './styles'

import { AddProductHome } from '../AddProductHome'
import { ReactComponent as HeartIcon } from '../../assets/Heart.svg'
import { ReactComponent as PencilIcon } from '../../assets/Pencil.svg'
import { ReactComponent as FilledHeartIcon } from '../../assets/FilledHeart.svg'

export function Product({
  handleCartCallback,
  handleAddItem,
  handleRemoveItem, // Functions imported from AddProductHome Component
  onClick,
  ProductObject,
}) {
  const { admin } = useAuth()

  return (
    <Container ProductObject={ProductObject}>
      <button
        className={admin === true ? 'iconButton' : 'iconButton heartIcon'}
        onClick={onClick}
      >
        {admin === true ? (
          <PencilIcon />
        ) : ProductObject.favorites.length === 0 ? (
          <HeartIcon />
        ) : (
          <FilledHeartIcon />
        )}
      </button>
      <Link to={`/details/${ProductObject.id}`}>
        <img
          src={`${api.defaults.baseURL}/files/${ProductObject.image}`}
          alt={`Foto de ${ProductObject.title}`}
        />
        {`${ProductObject.title} >`}
      </Link>
      <p className="web">
        {ProductObject.description.length <= 58
          ? ProductObject.description
          : ProductObject.description.substring(0, 55).concat('...')}
      </p>
      <span>{`R$ ${ProductObject.price.toString().replace('.', ',')}`}</span>
      <div>
        {admin === false && (
          <AddProductHome
            className="addProduct"
            // Calling functions created at the component AddProductHome
            handleCartCallback={handleCartCallback}
            ItemId={ProductObject.id}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        )}
      </div>
    </Container>
  )
}
