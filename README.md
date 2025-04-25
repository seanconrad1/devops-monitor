# devops-monitor

DevOps Monitoring & Automation Dashboard — a SaaS platform that integrates with Kubernetes clusters and cloud infrastructure to visualize system health, trigger automated workflows, and manage microservices deployments.

This project simulates real-world DevOps tooling with an internal dashboard.

🚀 Key Features:

👩‍💻 Frontend (React + Next.js + TypeScript)

- Authenticated dashboard using NextAuth or custom JWT

- Cluster overview page (nodes, pods, deployments)

- Log viewer with filters (powered by Splunk data)

- Trigger buttons for pipeline runs (e.g., Argo CD sync)

- Health widgets (Dynatrace metrics, API status)

- CI/CD history viewer (via GitHub Actions logs)

⚙️ Backend

- (Node.js + Express + TypeScript)
- RESTful APIs to fetch logs, metrics, and cloud resources

- Webhooks from GitHub Actions, Argo CD

- Auth layer for protecting APIs

- Integrate AWS SDK (EKS, Lambda, etc.)

🗃️ Database

- PostgreSQL (via Prisma ORM)

- Stores metadata: users, clusters, pipelines, logs cache

🧪 Testing

- Jest for unit testing

- Mocha + Chai for integration and API testing

☁️ Cloud & Infra

- AWS: Host backend APIs on Lambda, use API Gateway

- Use EKS to deploy microservices, autoscale with ELB

- Use Terraform + CloudFormation for IaC

- Helm for managing EKS deployments

- Docker for containerizing the backend

- Argo CD for GitOps-style deployment syncing

- GitHub Actions for CI/CD pipeline

- Splunk + Dynatrace for logging and performance monitoring

🧩 Optional Stretch Goals

- ChatOps bot (e.g., Slack integration to trigger builds)

- CLI tool (written in Node.js) to interact with the platform

- RBAC with scoped cluster access
