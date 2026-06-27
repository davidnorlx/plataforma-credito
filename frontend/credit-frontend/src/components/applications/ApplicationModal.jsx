import { FiX } from "react-icons/fi"
import { formatMoney, getBadge } from "../../utils/formatters"

export default function ApplicationModal({ application, onClose }) {
  if (!application) return null

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-custom">
          <h2>Detalle de la solicitud</h2>

          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="detail-grid">
          <span>Application Id</span>
          <strong>{application.ApplicationId}</strong>

          <span>Cliente</span>
          <strong>{application.CustomerId}</strong>

          <span>Score</span>
          <strong>{application.Score}</strong>

          <span>Salario</span>
          <strong>{formatMoney(application.Salary)}</strong>

          <span>Monto</span>
          <strong>{formatMoney(application.RequestedAmount)}</strong>

          <span>Estado</span>
          <strong>
            <span className={`badge ${getBadge(application.Status)}`}>
              {application.Status}
            </span>
          </strong>
        </div>

        <button className="primary-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}