import { Routes, Route } from 'react-router-dom'

import { ShopProvider } from '../hooks/shopContext'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'
import { New } from '../pages/New'
import { Test } from '../pages/Test'

export function AdminRoutes() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<New />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </ShopProvider>
  )
}
