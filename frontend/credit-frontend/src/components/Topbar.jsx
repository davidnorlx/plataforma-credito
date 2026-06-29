import { FiBell, FiLogOut } from "react-icons/fi"
import { useAuth } from "react-oidc-context"

export default function Topbar() {
  const auth = useAuth()

  const profile = auth.user?.profile

  return (
    <header className="topbar">

      <div>
        <h2>Credit Platform</h2>
        <span>Serverless Credit Approval Platform</span>
      </div>

      <div className="topbar-right">

        <button className="notification-button">
          <FiBell />
        </button>

        <div className="user-info">
          <strong>{profile?.email}</strong>
          <span>Administrador</span>
        </div>

        <button
            className="logout-button"
            onClick={() => {
            auth.removeUser()

            const clientId = "2ltbrgcb3jg7velqf9aup1dkfv"
            const logoutUri = encodeURIComponent(window.location.origin)
            const cognitoDomain = "https://us-east-1ck8gtbwk0.auth.us-east-1.amazoncognito.com"

            window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${logoutUri}`
        }}
>
        <FiLogOut />
             Salir
        </button>

      </div>

    </header>
  )
}