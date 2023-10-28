import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { History } from './pages/History.tsx'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
