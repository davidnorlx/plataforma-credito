export function formatMoney(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value || 0)
}

export function getBadge(status) {
  switch (status) {
    case "APPROVED":
      return "approved"
    case "REJECTED":
      return "rejected"
    default:
      return "manual"
  }
}