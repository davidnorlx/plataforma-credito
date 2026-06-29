# Glossary

**Documento:** Glossary

**Framework:** TOGAF® Standard – Preliminary Phase

**Versión:** 1.0

**Estado:** Draft

---

# 1. Propósito

Este documento define el glosario oficial de términos utilizados en la documentación de la Plataforma de Solicitud y Aprobación de Créditos.

Su objetivo es proporcionar un lenguaje común entre las áreas de negocio, arquitectura, desarrollo, operaciones y seguridad, reduciendo ambigüedades y garantizando consistencia en todos los entregables de arquitectura.

---

# 2. Objetivos

* Establecer un vocabulario común.
* Facilitar la comprensión de la documentación.
* Reducir interpretaciones ambiguas.
* Homogeneizar los conceptos utilizados durante el ciclo de vida del proyecto.

---

# 3. Términos de Negocio

| Término               | Definición                                                                  |
| --------------------- | --------------------------------------------------------------------------- |
| Cliente               | Persona que solicita un producto financiero a la entidad.                   |
| Solicitud de Crédito  | Petición realizada por un cliente para obtener un crédito.                  |
| Evaluación Crediticia | Proceso mediante el cual se determina el riesgo asociado a una solicitud.   |
| Score Crediticio      | Valor numérico que representa el nivel de riesgo del solicitante.           |
| Aprobación            | Resultado favorable de la evaluación crediticia.                            |
| Rechazo               | Resultado desfavorable de la evaluación crediticia.                         |
| Estado de Solicitud   | Situación actual de una solicitud dentro del proceso de negocio.            |
| Originación           | Proceso completo desde la creación de la solicitud hasta la decisión final. |

---

# 4. Términos de Arquitectura Empresarial

| Término                  | Definición                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------- |
| Arquitectura Empresarial | Disciplina que alinea estrategia, negocio, aplicaciones, datos y tecnología.        |
| Dominio de Arquitectura  | Área específica de la arquitectura (Negocio, Datos, Aplicaciones o Tecnología).     |
| Architecture Repository  | Repositorio central de artefactos arquitectónicos.                                  |
| Deliverable              | Documento formal generado durante una fase del ADM.                                 |
| Artifact                 | Modelo, catálogo, matriz o diagrama que soporta un deliverable.                     |
| Building Block           | Capacidad reutilizable utilizada para construir una solución.                       |
| ABB                      | Architecture Building Block. Componente conceptual independiente de la tecnología.  |
| SBB                      | Solution Building Block. Implementación tecnológica de un ABB.                      |
| ADM                      | Architecture Development Method de TOGAF.                                           |
| Governance               | Conjunto de procesos y controles que garantizan el cumplimiento de la arquitectura. |

---

# 5. Términos de Modelado

| Término   | Definición                                                                                           |
| --------- | ---------------------------------------------------------------------------------------------------- |
| ArchiMate | Lenguaje de modelado para Arquitectura Empresarial.                                                  |
| BPMN      | Notación estándar para modelado de procesos de negocio.                                              |
| C4 Model  | Modelo para documentar arquitecturas de software en distintos niveles de abstracción.                |
| ADR       | Architecture Decision Record. Documento que registra una decisión arquitectónica y su justificación. |

---

# 6. Términos de Desarrollo

| Término    | Definición                                                      |
| ---------- | --------------------------------------------------------------- |
| API        | Interfaz que permite la comunicación entre aplicaciones.        |
| REST       | Estilo arquitectónico para el diseño de servicios web.          |
| Endpoint   | Punto de acceso a un recurso expuesto mediante una API.         |
| JSON       | Formato estándar de intercambio de información.                 |
| DTO        | Objeto utilizado para transportar datos entre capas o sistemas. |
| Middleware | Componente que intercepta y procesa solicitudes y respuestas.   |
| CI/CD      | Integración Continua y Entrega Continua.                        |

---

# 7. Términos Cloud

| Término             | Definición                                                                    |
| ------------------- | ----------------------------------------------------------------------------- |
| Cloud Native        | Aplicación diseñada para aprovechar servicios cloud desde su concepción.      |
| Serverless          | Modelo de ejecución donde el proveedor cloud administra la infraestructura.   |
| Escalabilidad       | Capacidad de aumentar o disminuir recursos según la demanda.                  |
| Elasticidad         | Ajuste automático de recursos para responder a cambios en la carga.           |
| Alta Disponibilidad | Capacidad de un sistema para permanecer operativo con interrupciones mínimas. |
| Resiliencia         | Capacidad para recuperarse de fallas y continuar operando.                    |

---

# 8. Términos AWS

| Término            | Definición                                                             |
| ------------------ | ---------------------------------------------------------------------- |
| API Gateway        | Servicio administrado para publicar y proteger APIs.                   |
| AWS Lambda         | Servicio de cómputo serverless basado en funciones.                    |
| Amazon DynamoDB    | Base de datos NoSQL administrada.                                      |
| AWS Step Functions | Servicio para orquestar flujos de trabajo mediante máquinas de estado. |
| Amazon Cognito     | Servicio para autenticación, autorización y gestión de usuarios.       |
| Amazon CloudWatch  | Servicio de monitoreo, métricas y registros.                           |
| AWS X-Ray          | Servicio de trazabilidad distribuida para aplicaciones.                |
| Amazon EventBridge | Servicio de integración basado en eventos.                             |
| Amazon SNS         | Servicio de mensajería pub/sub para notificaciones.                    |
| Amazon S3          | Servicio de almacenamiento de objetos.                                 |
| Amazon CloudFront  | Red de distribución de contenido (CDN).                                |
| AWS IAM            | Servicio para la gestión de identidades y permisos.                    |

---

# 9. Términos de Seguridad

| Término         | Definición                                                                    |
| --------------- | ----------------------------------------------------------------------------- |
| Autenticación   | Proceso para verificar la identidad de un usuario o sistema.                  |
| Autorización    | Proceso para determinar los permisos de acceso a recursos.                    |
| JWT             | Token utilizado para transportar información de autenticación y autorización. |
| OAuth 2.0       | Framework para autorización delegada.                                         |
| OpenID Connect  | Protocolo de autenticación basado en OAuth 2.0.                               |
| RBAC            | Modelo de control de acceso basado en roles.                                  |
| Least Privilege | Principio que otorga únicamente los permisos mínimos necesarios.              |

---

# 10. Abreviaturas

| Abreviatura | Significado                                  |
| ----------- | -------------------------------------------- |
| ADM         | Architecture Development Method              |
| ABB         | Architecture Building Block                  |
| SBB         | Solution Building Block                      |
| API         | Application Programming Interface            |
| BPMN        | Business Process Model and Notation          |
| ADR         | Architecture Decision Record                 |
| DTO         | Data Transfer Object                         |
| JWT         | JSON Web Token                               |
| CI/CD       | Continuous Integration / Continuous Delivery |
| IaC         | Infrastructure as Code                       |
| RBAC        | Role-Based Access Control                    |
| REST        | Representational State Transfer              |
| KPI         | Key Performance Indicator                    |

---

# 11. Convenciones

* Los términos definidos en este glosario deberán utilizarse de forma consistente en todos los documentos del repositorio.
* Cuando se introduzca un nuevo término relevante para el negocio o la arquitectura, deberá añadirse a este glosario antes de incorporarse al resto de la documentación.
* Las abreviaturas deberán escribirse completas la primera vez que aparezcan en un documento.

---

# 12. Referencias

* TOGAF® Standard
* ArchiMate® Specification
* BPMN 2.0 Specification
* AWS Well-Architected Framework
* AWS Cloud Adoption Framework
* RFC 7519 (JSON Web Token)
* OpenAPI Specification 3.x

---

# 13. Conclusión

El presente glosario constituye la referencia oficial de términos para la documentación de la Plataforma de Solicitud y Aprobación de Créditos.

Su utilización garantiza consistencia terminológica, facilita la comunicación entre las diferentes áreas involucradas y contribuye al gobierno efectivo de la arquitectura.
