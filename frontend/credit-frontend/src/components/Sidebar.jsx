import { NavLink } from 'react-router-dom'
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiActivity,
  FiGitBranch,
  FiUserCheck
} from 'react-icons/fi'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>CREDIT</h2>

      <nav>
        <NavLink to="/dashboard">
          <FiHome /> Dashboard
        </NavLink>

        <NavLink to="/applications">
          <FiFileText /> Solicitudes de crédito
        </NavLink>

        <NavLink to="/customers">
          <FiUsers /> Clientes
        </NavLink>

        <NavLink to="/audit">
          <FiActivity /> Auditoría
        </NavLink>

        <NavLink to="/architecture">
          <FiGitBranch /> Arquitectura
        </NavLink>

        <NavLink to="/about">
  <FiUserCheck /> About
</NavLink>
      </nav>
    </aside>
  )
}