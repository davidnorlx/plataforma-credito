import { useEffect, useState } from "react"
import { useAuth } from "react-oidc-context"
import { FiFileText, FiCheckCircle, FiXCircle, FiClock } from "react-icons/fi"

import StatCard from "../../components/StatCard"
import CreditStatusChart from "../../components/CreditStatusChart"
import { getCreditApplications } from "../../api/creditApi"

export default function Dashboard() {
  const auth = useAuth()
  const token = auth.user?.id_token || auth.user?.access_token

  const [applications, setApplications] = useState([])

  useEffect(() => {
    if (!token) return

    getCreditApplications(token)
      .then(setApplications)
      .catch(console.error)
  }, [token])

  const total = applications.length
  const approved = applications.filter(x => x.Status === "APPROVED").length
  const rejected = applications.filter(x => x.Status === "REJECTED").length
  const manual = applications.filter(x => x.Status === "MANUAL_REVIEW").length

  return (
    <>
      <section className="welcome-panel">
        <div>
          <h2>Dashboard</h2>
          <p>Resumen operativo de la plataforma de crédito serverless.</p>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard title="Solicitudes" value={total} subtitle="Total procesadas" icon={FiFileText} />
        <StatCard title="Aprobadas" value={approved} subtitle="Créditos aprobados" icon={FiCheckCircle} />
        <StatCard title="Rechazadas" value={rejected} subtitle="Créditos rechazados" icon={FiXCircle} />
        <StatCard title="Revisión Manual" value={manual} subtitle="Casos pendientes" icon={FiClock} />
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <h3>Estado de solicitudes</h3>
          <CreditStatusChart approved={approved} rejected={rejected} manual={manual} />
        </div>

        <div className="panel">
          <h3>Últimas solicitudes</h3>

          <table className="table-modern">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Score</th>
                <th>Monto</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {applications.slice(0, 6).map(app => (
                <tr key={app.ApplicationId}>
                  <td>{app.CustomerId}</td>
                  <td>{app.Score}</td>
                  <td>{formatMoney(app.RequestedAmount)}</td>
                  <td>
                    <span className={`badge ${getBadgeClass(app.Status)}`}>
                      {app.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
     
    </>
  )
}

function getBadgeClass(status) {
  if (status === "APPROVED") return "approved"
  if (status === "REJECTED") return "rejected"
  return "manual"
}

function formatMoney(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value || 0)
}