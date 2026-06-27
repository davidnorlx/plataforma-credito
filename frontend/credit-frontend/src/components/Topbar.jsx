import { FiBell, FiSettings } from 'react-icons/fi'

export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h1>Plataforma de Crédito</h1>
        <span>AWS Serverless Credit Platform</span>
      </div>

      <div className="topbar-actions">
        <FiBell />
        <FiSettings />
        <div className="avatar">DL</div>
      </div>
    </header>
  )
}