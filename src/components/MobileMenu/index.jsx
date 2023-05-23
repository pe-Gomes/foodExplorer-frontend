import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Search, SearchResults } from './styles'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Input } from '../Input'
import { IconButton } from '../IconButton'
import { Footer } from '../Footer'
import { ReactComponent as SearchIcon } from '../../assets/Search.svg'
import { ReactComponent as CloseIcon } from '../../assets/Close.svg'

export function MobileMenu({ isActive, setVisible }) {
  const navigate = useNavigate()
  const { signOut, admin } = useAuth()

  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])

  function handleSearchLink(id) {
    const linkState = navigate(`/details/${id}`)
    setSearch('')
    return linkState
  }

  function handleSignOut() {
    signOut()
    navigate('/')
  }

  useEffect(() => {
    async function fetchSearchResults() {
      const res = await api.get(`/products?search=${search}`)
      setSearchData(res.data)
    }
    fetchSearchResults()
  }, [search])

  return (
    <Container isActive={isActive}>
      <header>
        <IconButton icon={CloseIcon} onClick={() => setVisible(false)} />
        <span>Menu</span>
      </header>
      <div className="content">
        <Search className="web">
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
                  <li key={`${result.id}_list`}>
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
        <nav>
          {admin === true && (
            <IconButton title="Novo prato" onClick={() => navigate('/new')} />
          )}
          <IconButton title="Sair" onClick={handleSignOut} />
        </nav>
      </div>
      <Footer />
    </Container>
  )
}
