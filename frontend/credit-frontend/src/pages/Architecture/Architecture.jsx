import { useState } from "react"
import {
  FiMonitor,
  FiGlobe,
  FiCpu,
  FiGitBranch,
  FiDatabase,
  FiRadio,
  FiActivity,
  FiZap,
  FiBell
} from "react-icons/fi"

const nodes = [
  "react",
  "api",
  "start",
  "step",
  "score",
  "decision",
  "save",
  "dynamo",
  "notification",
  "eventbridge",
  "audit"
]

export default function Architecture() {
  const [active, setActive] = useState([])

  function runSimulation() {
    setActive([])

    nodes.forEach((node, index) => {
      setTimeout(() => {
        setActive(prev => [...prev, node])
      }, index * 550)
    })
  }

  function isActive(key) {
    return active.includes(key)
  }

  return (
    <>
      <section className="welcome-panel">
        <div>
          <h2>Arquitectura AWS</h2>
          <p>Simulación visual del recorrido de una solicitud de crédito.</p>
        </div>
      </section>

      <section className="architecture-diagram-card">
        <div className="architecture-toolbar">
          <div>
            <h3>Flujo Serverless de Solicitud de Crédito</h3>
            <p>React → API Gateway → Lambda → Step Functions → DynamoDB / EventBridge</p>
          </div>

          <button className="primary-button small-button" onClick={runSimulation}>
            Simular solicitud
          </button>
        </div>

        <div className="aws-diagram">
          <Node active={isActive("react")} icon={FiMonitor} title="React Frontend" />
          <Line active={isActive("api")} />

          <Node active={isActive("api")} icon={FiGlobe} title="API Gateway" />
          <Line active={isActive("start")} />

          <Node active={isActive("start")} icon={FiCpu} title="StartWorkflow Lambda" />
          <Line active={isActive("step")} />

          <Node active={isActive("step")} icon={FiGitBranch} title="Step Functions" />

          <div className="branch-row">
            <Node active={isActive("score")} icon={FiZap} title="Score Lambda" />
            <Node active={isActive("decision")} icon={FiActivity} title="Decision Lambda" />
            <Node active={isActive("save")} icon={FiCpu} title="Save Lambda" />
            <Node active={isActive("notification")} icon={FiBell} title="Notification Lambda" />
          </div>

          <div className="branch-row">
            <Node active={isActive("dynamo")} icon={FiDatabase} title="DynamoDB" />
            <Node active={isActive("eventbridge")} icon={FiRadio} title="EventBridge" />
          </div>

          <Line active={isActive("audit")} />

          <Node active={isActive("audit")} icon={FiCpu} title="Audit Lambda" />
        </div>
      </section>
    </>
  )
}

function Node({ active, icon: Icon, title }) {
  return (
    <div className={`aws-node ${active ? "active" : ""}`}>
      <Icon />
      <span>{title}</span>
    </div>
  )
}

function Line({ active }) {
  return <div className={`aws-line ${active ? "active" : ""}`} />
}