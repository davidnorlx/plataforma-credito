import { FiCreditCard, FiDollarSign, FiSend, FiUser } from "react-icons/fi"

export default function CreditForm({ onSubmit }) {
  function submit(e) {
    e.preventDefault()

    const payload = {
      customerId: e.target.customerId.value,
      salary: Number(e.target.salary.value),
      requestedAmount: Number(e.target.requestedAmount.value)
    }

    onSubmit(payload)
  }

  return (
    <div className="form-card">
      <div className="form-header">
        <div>
          <h2>Nueva solicitud</h2>
          <p>Inicia un nuevo flujo de aprobación de crédito en AWS.</p>
        </div>

        <div className="form-icon">
          <FiCreditCard />
        </div>
      </div>

      <form className="credit-form" onSubmit={submit}>
        <div className="form-group">
          <label>Cliente</label>
          <div className="input-icon">
            <FiUser />
            <input name="customerId" defaultValue="CUS-001" required />
          </div>
        </div>

        <div className="form-group">
          <label>Salario</label>
          <div className="input-icon">
            <FiDollarSign />
            <input name="salary" type="number" defaultValue="5000000" required />
          </div>
        </div>

        <div className="form-group">
          <label>Monto solicitado</label>
          <div className="input-icon">
            <FiDollarSign />
            <input name="requestedAmount" type="number" defaultValue="10000000" required />
          </div>
        </div>

        <button className="primary-button">
          <FiSend />
          Enviar solicitud
        </button>
      </form>
    </div>
  )
}