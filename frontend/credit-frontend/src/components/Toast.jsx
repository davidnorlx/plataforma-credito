import { FiCheckCircle, FiX } from "react-icons/fi"

export default function Toast({ message, onClose }) {
  return (
    <div className="toast-custom">
      <FiCheckCircle />
      <span>{message}</span>

      <button onClick={onClose}>
        <FiX />
      </button>
    </div>
  )
}