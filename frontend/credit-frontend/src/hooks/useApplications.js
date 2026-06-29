import { useEffect, useState } from "react"
import { useAuth } from "react-oidc-context"
import {
  createCreditApplication,
  getCreditApplications
} from "../api/creditApi"

export function useApplications() {
  const auth = useAuth()
  console.log(auth)
  console.log(auth.user)

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("Esperando solicitud...")

  const token = auth.user?.id_token 

  async function loadApplications() {
    if (!token) return

    setLoading(true)

    try {
      const data = await getCreditApplications(token)
      setApplications(data)
    } catch (error) {
      console.error(error)
      setResult("Error consultando solicitudes")
    } finally {
      setLoading(false)
    }
  }

  async function createApplication(payload) {
    if (!token) {
      throw new Error("Usuario no autenticado")
    }

    setResult("Enviando solicitud...")

    const response = await createCreditApplication(payload, token)

    setResult(JSON.stringify(response, null, 2))

    setTimeout(() => {
      loadApplications()
    }, 2000)

    return response
  }

  useEffect(() => {
    loadApplications()
  }, [token])

  return {
    applications,
    loading,
    result,
    loadApplications,
    createApplication
  }
}