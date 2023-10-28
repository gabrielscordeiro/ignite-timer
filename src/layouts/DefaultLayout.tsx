import { Header } from '../components/Header.tsx'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
