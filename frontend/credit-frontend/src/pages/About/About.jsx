import {
  FiCloud,
  FiCode,
  FiBriefcase,
  FiAward,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiBookOpen
} from "react-icons/fi"

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div>
          <span className="about-label">Solutions Architect / Technical Lead</span>

          <h1>Héctor David López Flechas</h1>

          <p>
            Ingeniero de Sistemas con especialización en Arquitectura Empresarial de Software.
            Experiencia en desarrollo backend y full stack, liderazgo de equipos técnicos,
            consultoría tecnológica, modernización de sistemas, arquitectura cloud, DevOps
            y soluciones serverless sobre AWS y Azure.
          </p>

          <div className="about-contact">
            <span><FiMail /> davidflec@gmail.com  </span>
            <span><FiPhone /> 3057222525  </span>
            <span><FiMapPin /> Bogotá, Colombia </span>
          </div>

          <div className="about-actions">
            <a
              className="primary-button small-button"
              href="https://linkedin.com/in/hector-lopez-550a95168"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin /> LinkedIn
            </a>

            <button className="secondary-button">
              <FiGithub /> GitHub
            </button>
          </div>
        </div>

        <div className="about-avatar">DL</div>
      </section>

      <section className="about-stats">
        <div className="about-stat">
          <h3>7+</h3>
          <p>Años de experiencia</p>
        </div>

        <div className="about-stat">
          <h3>3</h3>
          <p>Clouds: AWS, Azure, Oracle</p>
        </div>

        <div className="about-stat">
          <h3>12+</h3>
          <p>Tecnologías clave</p>
        </div>

        <div className="about-stat">
          <h3>4</h3>
          <p>Roles principales</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="panel">
          <h2><FiCloud /> Perfil profesional</h2>
          <p>
            Profesional orientado al desarrollo e implementación de soluciones tecnológicas
            con enfoque estratégico. Experiencia en arquitectura escalable, microservicios,
            serverless, event-driven architecture, modernización cloud y comunicación con
            stakeholders técnicos y no técnicos.
          </p>
        </div>

        <div className="panel">
          <h2><FiCode /> Stack técnico</h2>

          <div className="tech-tags">
            <span>.NET</span>
            <span>C#</span>
            <span>PL/SQL</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>Spark</span>
            <span>Angular</span>
            <span>React</span>
            <span>AWS</span>
            <span>Azure</span>
            <span>Oracle Cloud</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>OpenShift</span>
            <span>Azure DevOps</span>
            <span>Oracle</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Power BI</span>
            <span>Tableau</span>
            <span>TOGAF</span>
            <span>ArchiMate</span>
          </div>
        </div>

        <div className="panel">
          <h2><FiBriefcase /> Experiencia destacada</h2>

          <div className="timeline">
            <div>
              <strong>SweetMe Soft </strong>
              <span>Consultor de Tecnología | 12/2024 - 06/2025</span>
              <p>
                Diseño de soluciones cloud en AWS, arquitectura serverless, microservicios,
                event-driven, entrevistas técnicas, diagramas arquitectónicos y estrategias
                de modernización.
              </p>
            </div>

            <div>
              <strong>Sodimac Colombia </strong>
              <span>Desarrollador Experto de Sistemas de Información | 10/2019 - Presente</span>
              <p>
                Liderazgo de equipos de desarrollo y QA, definición de lineamientos técnicos,
                arquitectura híbrida On-Premise/Cloud, CI/CD, roadmap técnico y modernización.
              </p>
            </div>

            <div>
              <strong>Olimpia TI </strong>
              <span>Analista de Calidad de Software | 07/2019 - 10/2019</span>
              <p>
                Pruebas funcionales, regresión, integración, usabilidad y seguimiento de defectos.
              </p>
            </div>

            <div>
              <strong>Bluzard / 4Sight </strong>
              <span>Desarrollador de Software | 01/2017 - 07/2019</span>
              <p>
                Desarrollo con PL/SQL, Oracle Forms, Oracle Reports, optimización de consultas
                y análisis de requerimientos.
              </p>
            </div>
          </div>
        </div>

        <div className="panel">
          <h2><FiAward /> Educación y certificaciones</h2>

          <ul className="about-list">
            <li>Especialización en Arquitectura Empresarial de Software - Pontificia Universidad Javeriana</li>
            <li>Ingeniería de Sistemas - Universidad Cooperativa de Colombia</li>
            <li>AWS Cloud Practitioner</li>
            <li>PySpark - Udemy</li>
            <li>Desarrollo C# - Udemy</li>
            <li>Inglés A2-B1</li>
          </ul>
        </div>

        <div className="panel large-panel">
          <h2><FiBookOpen /> Proyecto destacado</h2>

          <h3>Plataforma de Crédito Serverless en AWS</h3>

          <p>
            Plataforma full stack construida con React, API Gateway, Lambda, Step Functions,
            DynamoDB, EventBridge y auditoría basada en eventos. El proyecto demuestra diseño
            de arquitectura serverless, integración event-driven, orquestación de procesos,
            persistencia NoSQL y frontend desplegable en S3/CloudFront.
          </p>
        </div>
      </section>
    </>
  )
}