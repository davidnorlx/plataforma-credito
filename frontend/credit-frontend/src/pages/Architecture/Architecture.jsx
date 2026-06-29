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
  FiBell,
  FiShield,
  FiCloud,
  FiEye,
  FiBarChart2,
  FiLock,
  FiUploadCloud,
  FiCode
} from "react-icons/fi"

const nodes = [
  "user",
  "cloudfront",
  "s3",
  "react",
  "cognito",
  "jwt",
  "api",
  "authorizer",
  "start",
  "step",
  "score",
  "decision",
  "save",
  "notification",
  "dynamo",
  "eventbridge",
  "audit",
  "rbac",
  "waf",
  "cloudwatch",
  "xray",
  "cicd",
  "iac"
]

export default function Architecture() {
  const [active, setActive] = useState([])

  function runSimulation() {
    setActive([])

    nodes.forEach((node, index) => {
      setTimeout(() => {
        setActive(prev => [...prev, node])
      }, index * 420)
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
          <p>
            Arquitectura empresarial de la plataforma de crédito serverless con seguridad, autenticación y orquestación.
          </p>
        </div>
      </section>

      <section className="architecture-diagram-card">
        <div className="architecture-toolbar">
          <div>
            <h3>Arquitectura empresarial AWS</h3>
            <p>
              CloudFront → S3 privado → React → Cognito → JWT Authorizer → API Gateway → Lambda → Step Functions → DynamoDB / EventBridge
            </p>
          </div>

          <button className="primary-button small-button" onClick={runSimulation}>
            Simular recorrido
          </button>
        </div>

        <div className="architecture-legend">
          <span><b className="legend-dot current"></b> Implementado</span>
          <span><b className="legend-dot future"></b> Próxima fase</span>
        </div>

        <div className="aws-diagram">
          <Node active={isActive("user")} icon={FiMonitor} title="Usuario" status="current" />
          <Line active={isActive("cloudfront")} />

          <Node active={isActive("cloudfront")} icon={FiGlobe} title="CloudFront HTTPS" status="current" />
          <Line active={isActive("s3")} />

          <Node active={isActive("s3")} icon={FiCloud} title="S3 Bucket Privado" status="current" />
          <Line active={isActive("react")} />

          <Node active={isActive("react")} icon={FiMonitor} title="React SPA" status="current" />
          <Line active={isActive("cognito")} />

          <Node active={isActive("cognito")} icon={FiLock} title="Amazon Cognito" status="current" />
          <Line active={isActive("jwt")} />

          <Node active={isActive("jwt")} icon={FiShield} title="OAuth2 / OIDC + JWT" status="current" />
          <Line active={isActive("api")} />

          <Node active={isActive("api")} icon={FiGlobe} title="API Gateway" status="current" />
          <Line active={isActive("authorizer")} />

          <Node active={isActive("authorizer")} icon={FiShield} title="JWT Authorizer" status="current" />
          <Line active={isActive("start")} />

          <Node active={isActive("start")} icon={FiCpu} title="StartWorkflow Lambda" status="current" />
          <Line active={isActive("step")} />

          <Node active={isActive("step")} icon={FiGitBranch} title="Step Functions" status="current" />

          <div className="branch-row">
            <Node active={isActive("score")} icon={FiZap} title="Score Lambda" status="current" />
            <Node active={isActive("decision")} icon={FiActivity} title="Decision Lambda" status="current" />
            <Node active={isActive("save")} icon={FiCpu} title="Save Lambda" status="current" />
            <Node active={isActive("notification")} icon={FiBell} title="Notification Lambda" status="current" />
          </div>

          <div className="branch-row">
            <Node active={isActive("dynamo")} icon={FiDatabase} title="Amazon DynamoDB" status="current" />
            <Node active={isActive("eventbridge")} icon={FiRadio} title="Amazon EventBridge" status="current" />
            <Node active={isActive("audit")} icon={FiCpu} title="Audit Lambda" status="current" />
          </div>

          <div className="branch-row">
            <Node active={isActive("rbac")} icon={FiLock} title="Cognito Groups / RBAC" status="future" />
            <Node active={isActive("waf")} icon={FiShield} title="AWS WAF" status="future" />
          </div>

          <div className="branch-row">
            <Node active={isActive("cloudwatch")} icon={FiBarChart2} title="CloudWatch Dashboard" status="future" />
            <Node active={isActive("xray")} icon={FiEye} title="AWS X-Ray" status="future" />
          </div>

          <div className="branch-row">
            <Node active={isActive("cicd")} icon={FiUploadCloud} title="GitHub Actions CI/CD" status="future" />
            <Node active={isActive("iac")} icon={FiCode} title="Terraform / IaC" status="future" />
          </div>
        </div>
      </section>
    </>
  )
}

function Node({ active, icon: Icon, title, status }) {
  return (
    <div className={`aws-node ${active ? "active" : ""} ${status === "future" ? "future" : "current"}`}>
      <Icon />
      <span>{title}</span>
    </div>
  )
}

function Line({ active }) {
  return <div className={`aws-line ${active ? "active" : ""}`} />
}