import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
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
import { ReactComponent as MenuIcon } from '../../assets/Menu.svg'
import { Input } from '../Input'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { MobileMenu } from '../MobileMenu'

export function HeaderAdmin() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const [visible, setVisible] = useState(false)

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  function handleNewProduct() {
    navigate('/new')
  }

  function handleSearchLink(e, id) {
    e.preventDefault()
    const linkState = navigate(`/details/${id}`)
    setSearch('')
    setSearchData([])
    return linkState
  }

  useEffect(() => {
    async function fetchSearchResults() {
      const res = await api.get(`/products?search=${search}`)
      setSearchData(res.data)
    }
    fetchSearchResults()
  }, [search])

  return (
    <>
      <MobileMenu isActive={visible} setVisible={setVisible} />
      <Container>
        <IconButton
          icon={MenuIcon}
          className="mobile menu"
          onClick={() => setVisible(true)}
        />
        <Brand>
          <Logo />
          <h1>food explorer</h1>
          <span>admin</span>
        </Brand>
        <Search className="web">
          <Input
            icon={SearchIcon}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && searchData && (
            <SearchResults>
              {searchData &&
                searchData.map((result) => (
                  <li key={result.id}>
                    <img
                      src={`${api.defaults.baseURL}/files/${result.image}`}
                      alt={`Foto de ${result.title}`}
                    />
                    <a onClick={(e) => handleSearchLink(e, result.id)}>
                      {result.title}
                    </a>
                  </li>
                ))}
            </SearchResults>
          )}
        </Search>

        <ActionButtons className="web">
          <Button
            title="Novo prato"
            onClick={handleNewProduct}
            className="web"
          />
          <IconButton
            icon={ExitIcon}
            className="exitIcon"
            onClick={handleSignOut}
          />
        </ActionButtons>
      </Container>
    </>
  )
}
