import { useAuth } from "react-oidc-context"

export default function Login() {
  const auth = useAuth()

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Credit Platform</h1>
        <p>Plataforma serverless de originación de crédito en AWS.</p>

        <button className="primary-button" onClick={() => auth.signinRedirect()}>
          Iniciar sesión con Cognito
        </button>
      </div>
    </div>
  )
}