# Architecture

## Purpose

This document describes the architectural decisions behind the AQIP Frontend project.

The primary objective of this project is not only to build a React application, but to demonstrate how a modern frontend application moves through the complete software delivery lifecycle—from development to production deployment.

The architecture prioritizes:

- Maintainability
- Simplicity
- Reproducibility
- Automation
- Production readiness
- Future scalability

---

# System Overview

The frontend is built as a standalone application that can be developed, tested, containerized, released, and deployed independently.

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
Docker Image
     │
     ▼
Docker Hub
     │
     ▼
Production
```

The goal is to produce immutable, versioned Docker images that can be deployed without rebuilding the application.

---

# Architectural Goals

The project follows these engineering goals.

- Clear separation of responsibilities
- Reproducible builds
- Automated validation
- Versioned releases
- Immutable deployments
- Simple rollback strategy
- Infrastructure as Code
- Production-ready Docker images

---

# Repository Architecture

Current repositories:

```text
aqip-frontend
```

Future architecture:

```text
aqip-frontend
        │
        ├── React Application
        ├── Docker
        └── GitHub Actions
```

# Frontend Architecture

The frontend follows a feature-oriented structure.

```text
src
│
├── auth
├── components
├── config
├── layouts
├── pages
├── routes
├── services
├── shared
└── styles
```

Each directory has a clearly defined responsibility.

## auth

Authentication logic.

## components

Reusable UI components.

## config

Application configuration and build metadata.

## layouts

Application layouts.

## pages

Route-level components.

## routes

Routing configuration.

## services

API communication and external integrations.

## shared

Reusable utilities, constants and types.

## styles

Global styling.

---

# Branching Strategy

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

## Why Git Flow?

Git Flow provides clear separation between:

- Active development
- Release preparation
- Production code

Advantages:

- Stable production branch
- Dedicated release validation
- Easy hotfix support
- Predictable release process

For learning enterprise workflows, Git Flow provides better visibility than simpler branching models.

---

# Release Architecture

Releases are created using Semantic Versioning.

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
v1.0.0
v1.0.1
v1.1.0
v2.0.0
```

Each release includes:

- Git Tag
- GitHub Release
- Release Notes
- Docker Image

Every released version can be deployed or rolled back independently.

---

# Continuous Integration Architecture

Every push to the `develop` branch triggers the CI pipeline.

Pipeline stages:

```text
Checkout
      │
      ▼
Install Dependencies
      │
      ▼
Type Check
      │
      ▼
Lint
      │
      ▼
Production Build
      │
      ▼
Docker Build Validation
```

The objective is to detect issues before code reaches the release branch.

No Docker image is published during CI.

CI validates quality.

Release publishes artifacts.

---

# Build Architecture

The build process transforms source code into production assets.

```text
Source Code
      │
      ▼
npm run build
      │
      ▼
dist/
```

The `dist` directory is the first production artifact.

It contains:

- HTML
- CSS
- JavaScript
- Static assets

It does not contain:

- TypeScript
- Source code
- Development dependencies

---

# Artifact Strategy

The project follows the principle:

> **Build Once. Promote Many.**

Build process:

```text
Source Code
      │
      ▼
Build
      │
      ▼
Artifact (dist)
      │
      ▼
Docker Image
      │
      ▼
Docker Hub
      │
      ▼
Production
```

Production servers consume versioned artifacts instead of rebuilding applications.

Benefits:

- Reproducible deployments
- Faster releases
- Consistent environments
- Easier rollbacks

---

# Docker Architecture

A multi-stage Docker build is used.

```text
Builder Stage
      │
      ├── Install Dependencies
      ├── Build Application
      └── Produce dist/
             │
             ▼
Runtime Stage
      │
      ├── Nginx
      └── Static Files
```

Advantages:

- Small production image
- No development dependencies
- Better security
- Faster startup
- Optimized runtime

---

# Why Nginx?

React is a static frontend application.

Nginx is used because it provides:

- High performance
- Static file serving
- SPA routing support
- Small container image
- Production reliability

The application is compiled during the build stage and served as static content.

---

# Docker Compose Architecture

Docker Compose defines the desired runtime state.

Current deployment:

```text
Docker Compose
        │
        ▼
Frontend Container
```

Future deployment:

```text
Docker Compose
        │
        ├── Frontend
        ├── Backend
        ├── PostgreSQL
        └── pgAdmin
```

Compose replaces long `docker run` commands with version-controlled configuration.

---

# Deployment Architecture

Deployment uses immutable Docker images.

```text
GitHub Release
      │
      ▼
Docker Hub
      │
      ▼
docker compose pull
      │
      ▼
docker compose up -d
```

The production server never builds the application.

It only downloads published images.

---

# Rollback Strategy

Rollback is based on versioned Docker images.

Current deployment:

```text
v1.0.2
```

Rollback:

```text
v1.0.1
```

Process:

1. Change deployed version.
2. Pull previous image.
3. Restart containers.
4. Verify deployment.

No rebuild is required.

---

# Configuration Strategy

Application configuration is separated from deployment configuration.

Examples:

- Docker Compose
- Environment Variables
- Build Metadata

The objective is to avoid hardcoded values and simplify environment-specific deployments.

---

# Engineering Principles

## Single Responsibility Principle

Each module has one responsibility.

Examples:

- Authentication
- Routing
- Components
- Services

---

## Build Once, Promote Many

Applications are built once.

The same artifact is promoted through:

- QA
- UAT
- Production

This guarantees consistency between environments.

---

## Immutable Releases

Every release is uniquely versioned.

Released artifacts are never modified.

If an issue occurs, a previous version is redeployed.

---

## Infrastructure as Code

Deployment configuration is stored as code.

Benefits:

- Version control
- Reviewability
- Reproducibility
- Automation

---

## Automation First

Manual work is minimized wherever possible.

Current automation includes:

- Continuous Integration
- Docker image publishing
- Release creation

Future automation:

- Deployment repository
- Jenkins
- Kubernetes
- Argo CD

---
