import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <Topbar />
        <Outlet />
      </main>
    </div>
  )
}