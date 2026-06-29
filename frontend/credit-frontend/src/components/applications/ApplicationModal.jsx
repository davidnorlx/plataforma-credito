import { FiX, FiCheckCircle, FiCpu, FiDatabase, FiRadio, FiGitBranch, FiBell } from "react-icons/fi"
import { formatMoney, getBadge } from "../../utils/formatters"

export default function ApplicationModal({ application, onClose }) {
  if (!application) return null

  const risk = getRisk(application.Score)

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div className="modal-card application-detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-custom">
          <div>
            <h2>Expediente de solicitud</h2>
            <p>{application.ApplicationId}</p>
          </div>

          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="detail-summary">
          <div>
            <span>Estado</span>
            <strong>
              <span className={`badge ${getBadge(application.Status)}`}>
                {application.Status}
              </span>
            </strong>
          </div>

          <div>
            <span>Score</span>
            <strong>{application.Score}</strong>
          </div>

          <div>
            <span>Riesgo</span>
            <strong className={`risk ${risk.className}`}>{risk.label}</strong>
          </div>
        </div>

        <div className="detail-grid">
          <span>Cliente</span>
          <strong>{application.CustomerId}</strong>

          <span>Salario</span>
          <strong>{formatMoney(application.Salary)}</strong>

          <span>Monto solicitado</span>
          <strong>{formatMoney(application.RequestedAmount)}</strong>
        </div>

        <h3>Timeline del proceso</h3>

        <div className="process-timeline">
          <TimelineItem icon={FiCheckCircle} text="Solicitud recibida desde React" />
          <TimelineItem icon={FiCpu} text="API Gateway invocó Lambda" />
          <TimelineItem icon={FiGitBranch} text="Step Functions orquestó el flujo" />
          <TimelineItem icon={FiCpu} text="Score calculado" />
          <TimelineItem icon={FiCheckCircle} text="Decisión tomada" />
          <TimelineItem icon={FiDatabase} text="Solicitud guardada en DynamoDB" />
          <TimelineItem icon={FiBell} text="Notificación enviada" />
          <TimelineItem icon={FiRadio} text="Evento publicado en EventBridge" />
        </div>

        <h3>Servicios involucrados</h3>

        <div className="service-tags">
          <span>API Gateway</span>
          <span>Lambda</span>
          <span>Step Functions</span>
          <span>DynamoDB</span>
          <span>EventBridge</span>
          <span>CloudWatch</span>
        </div>

        <button className="primary-button" onClick={onClose}>
          Cerrar expediente
        </button>
      </div>
    </div>
  )
}

function TimelineItem({ icon: Icon, text }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <Icon />
      </div>
      <span>{text}</span>
    </div>
  )
}

function getRisk(score) {
  if (score >= 750) return { label: "Bajo", className: "low" }
  if (score >= 650) return { label: "Medio", className: "medium" }
  return { label: "Alto", className: "high" }
}