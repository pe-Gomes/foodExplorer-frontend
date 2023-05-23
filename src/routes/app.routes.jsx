import { Routes, Route } from 'react-router-dom'
import { ShopProvider } from '../hooks/shopContext'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Test } from '../pages/Test'

export function AppRoutes() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ShopProvider>
  )
}
