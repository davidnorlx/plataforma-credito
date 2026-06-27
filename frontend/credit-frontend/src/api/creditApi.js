import axios from 'axios'

const API_BASE_URL = 'https://s8vz193s0e.execute-api.us-east-1.amazonaws.com/prod'

export async function getCreditApplications() {
  const response = await axios.get(`${API_BASE_URL}/credit-applications`)
  return response.data
}

export async function createCreditApplication(payload) {
  const response = await axios.post(`${API_BASE_URL}/credit-applications`, payload)
  return response.data
}