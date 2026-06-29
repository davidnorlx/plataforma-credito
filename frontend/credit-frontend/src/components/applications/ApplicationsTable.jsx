import { FiSearch } from "react-icons/fi"
import { formatMoney, getBadge } from "../../utils/formatters"

export default function ApplicationsTable({
  applications,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  onSelect
}) {
  const filtered = applications.filter(app => {
    const matchesSearch =
      app.CustomerId?.toLowerCase().includes(search.toLowerCase()) ||
      app.Status?.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === "ALL" || app.Status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <section className="panel mt-4">
      <div className="table-header">
        <div>
          <h2>Solicitudes registradas</h2>
          <p>Información almacenada en DynamoDB.</p>
        </div>

        <div className="table-actions">
          <div className="search-box">
            <FiSearch />
            <input
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="ALL">Todos</option>
            <option value="APPROVED">Aprobadas</option>
            <option value="REJECTED">Rechazadas</option>
            <option value="MANUAL_REVIEW">Revisión manual</option>
          </select>
        </div>
      </div>

      <table className="table-modern full-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Score</th>
            <th>Salario</th>
            <th>Monto</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(app => (
            <tr
              key={app.ApplicationId}
              className="clickable-row"
              onClick={() => onSelect(app)}
            >
              <td>{app.CustomerId}</td>
              <td>{app.Score}</td>
              <td>{formatMoney(app.Salary)}</td>
              <td>{formatMoney(app.RequestedAmount)}</td>
              <td>
                <span className={`badge ${getBadge(app.Status)}`}>
                  {app.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}