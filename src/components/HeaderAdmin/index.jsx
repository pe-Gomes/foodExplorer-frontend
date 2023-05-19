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

export function HeaderAdmin() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])

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
    <Container>
      <div className="menu disabled">
        <button>
          <MenuIcon />
        </button>
        <div className="options disabled">
          <Search>
            <Input
              icon={SearchIcon}
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <SearchResults>
                {searchData &&
                  searchData.map((result) => (
                    <>
                      <li>
                        <img
                          src={`${api.defaults.baseURL}/files/${result.image}`}
                          alt={`Foto de ${result.title}`}
                        />
                        <a onClick={(e) => handleSearchLink(e, result.id)}>
                          {result.title}
                        </a>
                      </li>
                    </>
                  ))}
              </SearchResults>
            )}
          </Search>
        </div>
      </div>
      <Brand>
        <Logo />
        <h1>food explorer</h1>
        <span>admin</span>
      </Brand>
      <Search>
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
                <>
                  <li>
                    <img
                      src={`${api.defaults.baseURL}/files/${result.image}`}
                      alt={`Foto de ${result.title}`}
                    />
                    <a onClick={(e) => handleSearchLink(e, result.id)}>
                      {result.title}
                    </a>
                  </li>
                </>
              ))}
          </SearchResults>
        )}
      </Search>

      <ActionButtons>
        <Button title="Novo prato" onClick={handleNewProduct} />
        <IconButton
          icon={ExitIcon}
          className="exitIcon"
          onClick={handleSignOut}
        />
      </ActionButtons>
    </Container>
  )
}
