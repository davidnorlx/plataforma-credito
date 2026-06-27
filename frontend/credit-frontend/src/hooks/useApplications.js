import { useEffect, useState } from "react"
import { createCreditApplication, getCreditApplications } from "../api/creditApi"

export function useApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("Esperando solicitud...")

  async function loadApplications() {
    setLoading(true)

    try {
      const data = await getCreditApplications()
      setApplications(data)
    } finally {
      setLoading(false)
    }
  }

  async function createApplication(payload) {
    setResult("Enviando solicitud...")

    const response = await createCreditApplication(payload)

    setResult(JSON.stringify(response, null, 2))

    setTimeout(() => {
      loadApplications()
    }, 2000)

    return response
  }

  useEffect(() => {
    loadApplications()
  }, [])

  return {
    applications,
    loading,
    result,
    loadApplications,
    createApplication
  }
}