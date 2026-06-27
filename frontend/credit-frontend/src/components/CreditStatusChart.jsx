import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function CreditStatusChart({ approved, rejected, manual }) {
  const data = {
    labels: ['Aprobadas', 'Rechazadas', 'Revisión Manual'],
    datasets: [
      {
        data: [approved, rejected, manual],
        backgroundColor: ['#34c38f', '#f46a6a', '#f1b44c'],
        borderWidth: 0
      }
    ]
  }

  return (
    <div className="chart-container">
      <Doughnut data={data} />
    </div>
  )
}