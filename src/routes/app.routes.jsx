import { Routes, Route } from 'react-router-dom'
import { ShopProvider } from '../hooks/shopContext'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </ShopProvider>
  )
}
