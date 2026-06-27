export default function ResultPanel({ result }) {
  return (
    <div className="result-card">
      <h2>Respuesta API</h2>
      <pre>{result}</pre>
    </div>
  )
}