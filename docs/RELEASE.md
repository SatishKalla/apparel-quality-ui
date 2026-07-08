# Release Management Guide

## Purpose

This document describes the release management process for the AQIP Frontend project.

The goal is to ensure every production release is:

- Predictable
- Reproducible
- Versioned
- Traceable
- Easy to rollback

The project follows **Git Flow** together with **Semantic Versioning** and **GitHub Releases**.

---

# Release Lifecycle

Every production release follows the lifecycle below.

```text
Feature Development
        │
        ▼
Develop Branch
        │
        ▼
Release Branch
        │
        ▼
Quality Assurance
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
GitHub Actions
        │
        ▼
Docker Hub
        │
        ▼
Production Deployment
```

Each stage has a specific responsibility.

---

# Branching Strategy

The project uses Git Flow.

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

## Branch Responsibilities

### feature/*

Used for developing individual features or bug fixes.

Examples:

```text
feature/login-page

feature/dashboard

feature/user-management
```

Feature branches are created from `develop`.

---

### develop

Integration branch for all completed features.

Every push to `develop` triggers the Continuous Integration pipeline.

The `develop` branch should always remain buildable.

---

### release/*

Example:

```text
release/v1.0.0
```

Purpose:

- Stabilize the release
- Perform QA
- Fix release-specific issues
- Prepare release documentation
- Update release notes

No new features should be added to a release branch.

Only bug fixes are allowed.

---

### main

Represents production.

Only production-ready code should exist in this branch.

Every merge into `main` represents a production release.

---

# Semantic Versioning

The project follows Semantic Versioning.

Format:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
v1.0.0
```

---

## MAJOR

Increment when introducing breaking changes.

Example:

```text
v1.0.0

↓

v2.0.0
```

---

## MINOR

Increment when adding backward-compatible features.

Example:

```text
v1.0.0

↓

v1.1.0
```

---

## PATCH

Increment when fixing bugs without changing functionality.

Example:

```text
v1.0.0

↓

v1.0.1
```

---

# Release Checklist

Before creating a release, verify the following:

- All planned features are complete.
- All pull requests are merged.
- TypeScript passes.
- ESLint passes.
- Production build succeeds.
- Docker image builds successfully.
- CI pipeline is green.
- Documentation is updated.
- CHANGELOG.md is updated.
- Version number is confirmed.

Only after all items are complete should a release branch be created.

---

# Creating a Release

## Step 1

Create a release branch.

```bash
git checkout develop

git pull origin develop

git checkout -b release/v1.0.0
```

---

## Step 2

Update documentation.

Examples:

- README.md
- CHANGELOG.md
- Release Notes

---

## Step 3

Perform QA/UAT.

Typical validation:

- Login
- Navigation
- Dashboard
- Protected Routes
- Docker Build
- Docker Compose

Any bugs discovered during QA should be fixed directly in the release branch.

---

## Step 4

Merge into main.

```bash
git checkout main

git merge release/v1.0.0
```

Push changes.

```bash
git push origin main
```

---

## Step 5

Create Git Tag.

```bash
git tag v1.0.0
```

Push the tag.

```bash
git push origin v1.0.0
```

The Git tag uniquely identifies the release.

---

# GitHub Release

After pushing the tag:

1. Open GitHub.
2. Navigate to **Releases**.
3. Click **Draft a new release**.
4. Select the Git tag.
5. Enter release notes.
6. Publish the release.

The GitHub Release becomes the official release record.

---

# Release Notes

Release Notes should summarize the changes included in the release.

Example:

## Added

- Dashboard
- Authentication
- Protected Routes

## Changed

- Improved Dockerfile
- Updated project documentation

## Fixed

- SPA refresh issue
- Docker Compose configuration

## Removed

- Deprecated configuration

Keep release notes concise and user-focused.

---

# GitHub Actions Release Pipeline

Publishing a GitHub Release triggers the release workflow.

Pipeline:

```text
Checkout Repository
        │
        ▼
Install Dependencies
        │
        ▼
Build Application
        │
        ▼
Docker Build
        │
        ▼
Docker Login
        │
        ▼
Push Image to Docker Hub
```

The output is a versioned Docker image.

Example:

```text
username/aqip-frontend:v1.0.0
```

---

# Docker Image Versioning

Every release generates a uniquely tagged Docker image.

Example:

```text
v1.0.0

v1.0.1

v1.1.0
```

The project intentionally avoids deploying only the `latest` tag because versioned images simplify:

- Rollback
- Auditing
- Traceability
- Reproducibility

---

# Artifact Strategy

The project follows the principle:

> **Build Once. Promote Many.**

The build pipeline produces production artifacts.

```text
Source Code
        │
        ▼
Build
        │
        ▼
dist/
        │
        ▼
Docker Image
        │
        ▼
Docker Hub
```

Production deployments consume published artifacts instead of rebuilding the application.

---

# Deployment

After the Docker image is published:

1. Update the deployment version.
2. Pull the new image.
3. Restart the service.
4. Verify the deployment.

Deployment is documented separately in `DEPLOYMENT.md`.

---

# Rollback

If a deployment fails:

1. Change the deployed image version to the previous release.
2. Pull the previous image.
3. Restart containers.
4. Verify application health.

Rollback is documented in `ROLLBACK.md`.

---

# Common Mistakes

## Creating a tag before merging to main

Incorrect.

Always merge into `main` before creating the production tag.

---

## Rebuilding in production

Avoid rebuilding on production servers.

Deploy published Docker images instead.

---

## Skipping CI

Never release code that has not passed the CI pipeline.

---

## Deploying latest

Avoid using only:

```text
latest
```

Prefer versioned images.

Example:

```text
v1.0.0
```

---

## Forgetting CHANGELOG.md

Every release should update the changelog before publishing.

---

# Best Practices

- Keep releases small.
- Release frequently.
- Automate repetitive tasks.
- Use semantic versioning.
- Publish immutable Docker images.
- Test release candidates.
- Maintain clear release notes.
- Verify deployments after release.
- Ensure rollback is always possible.

---

# Future Improvements

As the AQIP platform evolves, release management will become increasingly automated.

Future enhancements include:

- Automatic version generation
- Automated changelog creation
- Automatic GitHub Release generation
- Deployment repository
- Automated production deployments
- Jenkins release pipelines
- GitOps with Argo CD

The release principles described in this document will remain unchanged, while the level of automation will continue to improve.

---

# Conclusion

The release process exists to reduce deployment risk.

By combining Git Flow, Semantic Versioning, GitHub Releases, immutable Docker images, and automated CI/CD pipelines, AQIP ensures that every production release is:

- Repeatable
- Traceable
- Versioned
- Easy to deploy
- Easy to rollback

Following this process consistently allows the project to evolve safely while maintaining production stability.
