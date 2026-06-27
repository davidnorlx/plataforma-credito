import { FiArrowUpRight } from 'react-icons/fi'

export default function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="stat-card">
      <div>
        <p>{title}</p>
        <h3>{value}</h3>
        <span>{subtitle}</span>
      </div>

      <div className="stat-icon">
        {Icon && <Icon />}
      </div>

      <div className="stat-trend">
        <FiArrowUpRight /> 12%
      </div>
    </div>
  )
}