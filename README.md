# Apparel Quality Frontend

> Enterprise-ready React + TypeScript application demonstrating modern software delivery practices including Git Flow, Docker, GitHub Actions, Docker Compose, automated releases, versioned deployments, and rollback strategies.

---

## 📖 Overview

AQIP Frontend is more than a React application.

This project was built to demonstrate how a modern frontend application moves from development to production using enterprise engineering practices.

Rather than focusing only on writing React components, this repository follows the complete software delivery lifecycle:

- Frontend Development
- Git Flow
- Semantic Versioning
- GitHub Releases
- Docker
- Docker Compose
- GitHub Actions
- Continuous Integration
- Automated Docker Image Publishing
- Production Deployment
- Rollback Strategy

The long-term goal is to evolve AQIP into a complete enterprise platform consisting of multiple repositories, backend services, infrastructure, Kubernetes, GitOps, and production operations.

---

# 🚀 Features

- React + TypeScript
- Vite
- Ant Design
- React Router
- Authentication
- Protected Routes
- Dashboard
- Custom 404 Page
- Docker Multi-stage Build
- Nginx Production Image
- Docker Compose
- GitHub Actions CI
- Automated Docker Hub Publishing
- Semantic Versioning
- GitHub Releases
- Production Rollback Process

---

# 🛠 Technology Stack

| Category                          | Technology     |
| --------------------------------- | -------------- |
| Frontend                          | React          |
| Language                          | TypeScript     |
| Build Tool                        | Vite           |
| UI Library                        | Ant Design     |
| Routing                           | React Router   |
| Package Manager                   | npm            |
| Web Server                        | Nginx          |
| Containerization                  | Docker         |
| Container Orchestration (Current) | Docker Compose |
| CI/CD                             | GitHub Actions |
| Image Registry                    | Docker Hub     |
| Version Control                   | Git + GitHub   |

---

# 🏗 High-Level Architecture

```text
Developer
    │
    ▼
Feature Branch
    │
    ▼
Develop Branch
    │
    ▼
GitHub Actions (CI)
    │
    ├── Type Check
    ├── Lint
    ├── Build
    └── Docker Validation
    │
    ▼
Release Branch
    │
    ▼
Main Branch
    │
    ▼
Git Tag
    │
    ▼
GitHub Release
    │
    ▼
Docker Hub
    │
    ▼
Production Deployment
```

---

# 📂 Project Structure

```text
apparel-quality-ui
│
├── .github/
│   └── workflows/
│
├── docs/
│
├── public/
│
├── src/
│   ├── auth/
│   ├── components/
│   ├── config/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── shared/
│   └── styles/
│
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
└── README.md
```

---

# ⚙ Local Development

## Clone Repository

```bash
git clone <repository-url>

cd apparel-quality-ui
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Default URL

```
http://localhost:5173
```

---

# 🧪 Available Scripts

Development

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Preview Production Build

```bash
npm run preview
```

Type Check

```bash
npm run type-check
```

Lint

```bash
npm run lint
```

---

# 🐳 Docker

Build image

```bash
docker build -t aqip-frontend .
```

Run container

```bash
docker run -d -p 8080:80 --name aqip-frontend aqip-frontend
```

Application

```
http://localhost:8080
```

---

# 🐳 Docker Compose

Start

```bash
docker compose up -d
```

Stop

```bash
docker compose down
```

Logs

```bash
docker compose logs
```

Running Containers

```bash
docker compose ps
```

---

# 🔄 CI/CD Pipeline

Every push to the **develop** branch triggers Continuous Integration.

Pipeline stages:

- Checkout Repository
- Install Dependencies
- TypeScript Validation
- ESLint
- Production Build
- Docker Image Validation

Release pipeline:

```text
Git Tag

↓

Build

↓

Docker Image

↓

Docker Hub
```

---

# 🌿 Git Workflow

The project follows Git Flow.

```text
feature/*
      │
      ▼
develop
      │
      ▼
release/vX.Y.Z
      │
      ▼
main
```

Only the **main** branch is used for production releases.

---

# 📦 Versioning

Semantic Versioning is used.

```
MAJOR.MINOR.PATCH
```

Example

```
v1.0.0
v1.0.1
v1.1.0
v2.0.0
```

---

# 🚀 Release Process

1. Complete feature development.
2. Merge into `develop`.
3. Create a release branch.
4. Perform QA/UAT validation.
5. Merge into `main`.
6. Create Git Tag.
7. Publish GitHub Release.
8. GitHub Actions publishes Docker image.
9. Deploy the versioned image.

Detailed documentation is available in:

```
docs/RELEASE.md
```

---

# 🚀 Deployment

Current deployment uses Docker Compose.

Deployment steps:

1. Pull latest image.
2. Update deployment version.
3. Restart containers.
4. Verify deployment.
5. Monitor logs.

Deployment documentation:

```
docs/DEPLOYMENT.md
```

---

# 🔁 Rollback Strategy

Every release is immutable.

If a deployment fails:

1. Change the deployed image version.
2. Pull the previous image.
3. Restart containers.
4. Verify the application.

No rebuild is required.

Rollback guide:

```
docs/ROLLBACK.md
```

---

# 🧩 Engineering Principles

This project intentionally follows several software engineering principles.

### Single Responsibility

Each component has a single responsibility.

### DRY (Don't Repeat Yourself)

Reusable components and reusable GitHub workflows are preferred over duplication.

### Build Once, Promote Many

Production deployments use versioned Docker images instead of rebuilding the application.

### Infrastructure as Code

Deployment configuration is stored as code.

### Immutable Releases

Every release is uniquely versioned and reproducible.

---

# 📚 Documentation

Additional documentation is located in the `docs` directory.

- ARCHITECTURE.md
- RELEASE.md
- DEPLOYMENT.md
- ROLLBACK.md

---

# 🎯 Learning Outcomes

This repository demonstrates knowledge of:

- React Architecture
- TypeScript
- Git Flow
- Semantic Versioning
- Docker
- Docker Compose
- Nginx
- GitHub Actions
- CI/CD
- Docker Hub
- Release Management
- Versioned Deployments
- Rollback Strategy
- Production Readiness

---

# 🤝 Contributing

Contributions are welcome.

Please open an issue before submitting major changes.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed by Satish Kalla.
