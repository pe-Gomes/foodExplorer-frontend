import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { token, user } = response.data

      localStorage.setItem('@food-explorer:user', JSON.stringify(user))
      localStorage.setItem('@food-explorer:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      const isAdmin = response.data.user.admin === 1

      setData({ user, token, admin: isAdmin })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@food-explorer:user')
    localStorage.removeItem('@food-explorer:token')
    localStorage.removeItem('@food-explorer:cart')
    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@food-explorer:token')
    const user = localStorage.getItem('@food-explorer:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      const objectUser = JSON.parse(user)
      const isAdmin = objectUser.admin === 1

      setData({
        token,
        user: JSON.parse(user),
        admin: isAdmin,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        admin: data.admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
