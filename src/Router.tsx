import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { History } from './pages/History.tsx'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
