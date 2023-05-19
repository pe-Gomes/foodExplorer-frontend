import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useShop } from '../../hooks/shopContext'
import { api } from '../../services/api'

import {
  Container,
  Brand,
  Search,
  ActionButtons,
  SearchResults,
} from './styled'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as SearchIcon } from '../../assets/Search.svg'
import { ReactComponent as ExitIcon } from '../../assets/Exit.svg'
import { ReactComponent as ReceiptIcon } from '../../assets/Receipt.svg'
import { ReactComponent as MenuIcon } from '../../assets/Menu.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import { IconButton } from '../IconButton'

export function Header() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const { numberOfItemsOnCart } = useShop()

  const [search, setSearch] = useState('')
  const [mealSearch, setMealSearch] = useState([])
  const [dessertSearch, setDessertSearch] = useState([])
  const [drinkSearch, setDrinkSearch] = useState([])

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  function handleSearchLink(id) {
    const linkState = navigate(`/details/${id}`)
    setSearch('')
    return linkState
  }

  useEffect(() => {
    async function fetchSearchResults() {
      const res = await api.get(`/products?search=${search}`)
      setMealSearch(res.data.meal)
      setDessertSearch(res.data.dessert)
      setDrinkSearch(res.data.drink)
    }

    fetchSearchResults()
  }, [search])

  return (
    <Container>
      <Brand>
        <Logo />
        <h1>food explorer</h1>
      </Brand>
      <Search>
        <Input
          icon={SearchIcon}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <SearchResults>
            <li className="category">Refeições</li>
            {mealSearch ? null : <span>Sem resultados.</span>}
            {mealSearch &&
              mealSearch.map((result) => (
                <>
                  <li key={`${result.id}_list`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${result.image}`}
                      alt={`Foto de ${result.title}`}
                      key={`${result.id}_image`}
                    />
                    <a
                      onClick={(e) => handleSearchLink(e, result.id)}
                      key={`${result.id}_anchor`}
                    >
                      {result.title}
                    </a>
                  </li>
                </>
              ))}

            <li className="category">Sobremesas</li>
            {dessertSearch ? null : <span>Sem resultados.</span>}
            {dessertSearch &&
              dessertSearch.map((result) => (
                <>
                  <li key={`${result.id}_list`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${result.image}`}
                      alt={`Foto de ${result.title}`}
                      key={`${result.id}_image`}
                    />
                    <a
                      onClick={(e) => handleSearchLink(e, result.id)}
                      key={`${result.id}_anchor`}
                    >
                      {result.title}
                    </a>
                  </li>
                </>
              ))}
            <li className="category">Bebidas</li>
            {drinkSearch ? null : <span>Sem resultados.</span>}
            {drinkSearch &&
              drinkSearch.map((result) => (
                <>
                  <li key={`${result.id}_list`}>
                    <img
                      src={`${api.defaults.baseURL}/files/${result.image}`}
                      alt={`Foto de ${result.title}`}
                      key={`${result.id}_image`}
                    />
                    <a
                      onClick={(e) => handleSearchLink(e, result.id)}
                      key={`${result.id}_anchor`}
                    >
                      {result.title}
                    </a>
                  </li>
                </>
              ))}
          </SearchResults>
        )}
      </Search>

      <ActionButtons>
        <Button
          title={
            numberOfItemsOnCart == 0
              ? 'Pedidos (0)'
              : `Pedidos (${numberOfItemsOnCart})`
          }
          icon={ReceiptIcon}
        />
        <IconButton
          icon={ExitIcon}
          className="exitIcon"
          onClick={handleSignOut}
        />
      </ActionButtons>
    </Container>
  )
}
