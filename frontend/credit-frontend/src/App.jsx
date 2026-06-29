import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'

import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import Applications from './pages/Applications/Applications'
import Customers from './pages/Customers/Customers'
import Audit from './pages/Audit/Audit'
import Architecture from './pages/Architecture/Architecture'
import About from './pages/About/About'
import Login from './pages/Login/Login'

export default function App() {
  const auth = useAuth()

  if (auth.isLoading) {
    return <div className="login-page"><div className="login-card">Cargando...</div></div>
  }

  if (auth.error) {
    return <div className="login-page"><div className="login-card">Error: {auth.error.message}</div></div>
  }

  if (!auth.isAuthenticated) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="customers" element={<Customers />} />
          <Route path="audit" element={<Audit />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}