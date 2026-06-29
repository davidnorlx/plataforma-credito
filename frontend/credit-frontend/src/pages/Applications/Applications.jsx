import { useState } from "react"
import CreditForm from "../../components/applications/CreditForm"
import ResultPanel from "../../components/applications/ResultPanel"
import ApplicationsTable from "../../components/applications/ApplicationsTable"
import ApplicationModal from "../../components/applications/ApplicationModal"
import Toast from "../../components/Toast"
import { useApplications } from "../../hooks/useApplications"
import { useAuth } from "react-oidc-context";

export default function Applications() {
  const {
    applications,
    result,
    createApplication
  } = useApplications()

  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState(null)
  const [statusFilter, setStatusFilter] = useState("ALL")

  async function handleCreate(payload) {
    try {
      await createApplication(payload)

      setToast("Solicitud creada correctamente")

      setTimeout(() => {
        setToast(null)
      }, 3500)
    } catch (error) {
      setToast("Error creando solicitud")
    }
  }

  return (
    <>
      <section className="applications-page">
        <CreditForm onSubmit={handleCreate} />
        <ResultPanel result={result} />
      </section>

      <ApplicationsTable
        applications={applications}
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onSelect={setSelected}
        />

      <ApplicationModal
        application={selected}
        onClose={() => setSelected(null)}
      />

      {toast && (
        <Toast
          message={toast}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}