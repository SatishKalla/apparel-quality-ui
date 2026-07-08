# Deployment Guide

## Purpose

This document describes the deployment process for the AQIP Frontend application.

The objective is to provide a repeatable and reliable deployment process using:

- Docker
- Docker Compose
- Docker Hub
- Ubuntu (WSL2 for local learning)

The same deployment approach can later be used on cloud virtual machines such as AWS EC2, Azure VM, Google Compute Engine, or DigitalOcean.

---

# Deployment Architecture

The deployment architecture follows the diagram below.

```text
Developer
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Docker Hub
      │
      ▼
Ubuntu Server
      │
      ▼
Docker Compose
      │
      ▼
Running Container
```

Notice that the production server never builds the application.

Its only responsibility is to download and run published Docker images.

---

# Deployment Prerequisites

Before deploying, ensure the server has:

- Ubuntu Linux
- Docker Engine
- Docker Compose
- Internet connectivity
- Access to Docker Hub

Verify the installation.

```bash
docker --version
```

```bash
docker compose version
```

---

# Server Directory Structure

Create a dedicated directory for the deployment.

Example:

```text
/opt/aqip
│
├── docker-compose.yml
├── .env
└── README.md
```

Application source code should **not** exist on the deployment server.

The server only contains deployment configuration.

---

# Docker Compose Configuration

Example:

```yaml
services:
  frontend:
    image: ${DOCKERHUB_USERNAME}/aqip-frontend:${APP_VERSION}

    container_name: aqip-frontend

    ports:
      - "${APP_PORT}:80"

    restart: unless-stopped
```

The deployment should always use versioned Docker images.

Avoid deploying the `latest` tag.

---

# Environment Configuration

Create a `.env` file.

Example:

```properties
DOCKERHUB_USERNAME=your-dockerhub-username

APP_VERSION=v1.0.0

APP_PORT=80
```

Changing the deployed version should only require updating the `APP_VERSION` value.

---

# First Deployment

Download the Docker image.

```bash
docker compose pull
```

Start the application.

```bash
docker compose up -d
```

Docker Compose compares the desired state with the current state and creates the required container.

---

# Verify the Deployment

Check running containers.

```bash
docker compose ps
```

Expected output:

```text
NAME               STATUS

aqip-frontend      Up
```

---

# Check Logs

View container logs.

```bash
docker compose logs
```

or

```bash
docker logs aqip-frontend
```

The logs should not contain startup errors.

---

# Verify the Application

Open the application in a browser.

```text
http://localhost
```

Verify:

- Login page loads
- Authentication works
- Dashboard loads
- Navigation works
- No browser console errors

---

# Updating the Application

When a new version is released:

Current:

```properties
APP_VERSION=v1.0.0
```

New release:

```properties
APP_VERSION=v1.0.1
```

Update the value.

Pull the new image.

```bash
docker compose pull
```

Restart the service.

```bash
docker compose up -d
```

Docker Compose recreates the container using the new image.

No application build is performed on the server.

---

# Deployment Verification Checklist

After every deployment verify:

- Container is running
- Logs contain no errors
- Application loads successfully
- Login works
- Dashboard loads
- Static assets load correctly

If build metadata is available, confirm the displayed version matches the deployed version.

---

# Health Monitoring

Docker reports the container state.

```bash
docker ps
```

Example:

```text
STATUS

Up (healthy)
```

Health checks should validate the application rather than only confirming that the container process is running.

Future versions will expose a dedicated `/health` endpoint.

---

# Rollback

If a deployment fails:

Current deployment:

```properties
APP_VERSION=v1.0.1
```

Rollback:

```properties
APP_VERSION=v1.0.0
```

Run:

```bash
docker compose pull
```

```bash
docker compose up -d
```

Docker Compose restores the previous version.

Rollback should complete within a few minutes.

No rebuild is required.

---

# Maintenance Commands

## Running Containers

```bash
docker compose ps
```

---

## Logs

```bash
docker compose logs
```

---

## Stop Application

```bash
docker compose stop
```

---

## Start Application

```bash
docker compose start
```

---

## Restart Application

```bash
docker compose restart
```

---

## Remove Containers

```bash
docker compose down
```

---

## Remove Unused Images

```bash
docker image prune
```

---

## Remove Unused Resources

```bash
docker system prune
```

Use this command with caution because it removes unused Docker resources.

---

# Common Deployment Issues

## Docker Image Not Found

Possible causes:

- Incorrect Docker Hub repository name
- Incorrect image tag
- Image not published

Verify:

```bash
docker pull username/aqip-frontend:v1.0.0
```

---

## Port Already In Use

Example:

```text
Bind for 0.0.0.0:80 failed
```

Solution:

Identify the process using the port.

```bash
sudo lsof -i :80
```

or

```bash
sudo ss -tulpn | grep :80
```

Stop the conflicting process or change the application port.

---

## Container Exits Immediately

Check logs.

```bash
docker logs aqip-frontend
```

Resolve the reported issue before redeploying.

---

## Browser Shows Old Application

Possible causes:

- Browser cache
- CDN cache

Perform a hard refresh or clear the browser cache.

---

# Best Practices

- Always deploy versioned images.
- Never deploy directly from source code.
- Never build on production servers.
- Verify deployments immediately.
- Monitor logs after deployment.
- Keep deployment configuration under version control.
- Test rollback procedures regularly.
- Avoid manual changes inside running containers.

---

# Future Improvements

As the AQIP platform evolves, deployments will become increasingly automated.

Current workflow:

```text
Developer

↓

Docker Hub

↓

Manual Deployment
```

Next phase:

```text
Developer

↓

Docker Hub

↓

Deployment Repository

↓

GitHub Actions

↓

Ubuntu Server
```

Future state:

```text
Developer

↓

Docker Hub

↓

Deployment Repository

↓

Argo CD

↓

Kubernetes
```

Although the deployment mechanism will evolve, the core principle will remain unchanged:

**Build once, publish immutable artifacts, and deploy versioned images.**

---

# Conclusion

The deployment process for AQIP Frontend is intentionally simple, repeatable, and production-oriented.

The production server has a single responsibility:

- Download published Docker images.
- Run the requested version.
- Verify the deployment.
- Roll back if necessary.

By separating application development from deployment, the project establishes a strong foundation for future expansion into backend services, deployment automation, Kubernetes, and GitOps.
