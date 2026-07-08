# Rollback Guide

## Purpose

This document describes the rollback procedure for the AQIP Frontend application.

The objective of rollback is to restore the last known stable version of the application as quickly and safely as possible.

The project follows the principle:

> **Build Once. Promote Many.**

Production deployments use immutable Docker images. If a deployment fails, the previous version is redeployed without rebuilding the application.

---

# What is a Rollback?

A rollback is the process of restoring a previously deployed version of an application.

Example:

```text
Current Production

v1.0.0 ✅

        │
        ▼

Deploy v1.0.1

        │
        ▼

Users Report Issues ❌

        │
        ▼

Rollback

        │
        ▼

v1.0.0 ✅
```

Rollback should be fast, repeatable, and require minimal manual intervention.

---

# Rollback Principles

AQIP follows these rollback principles:

- Never rebuild on production.
- Deploy immutable Docker images.
- Every release is versioned.
- Every deployment must be reversible.
- Rollback should be documented and tested.
- Production servers consume published artifacts only.

---

# When Should You Roll Back?

Rollback should be considered when:

- Users cannot access the application.
- Critical functionality stops working.
- Deployment introduces unexpected regressions.
- Health checks fail.
- Severe performance degradation occurs.
- Deployment verification fails.
- Security issues are identified after release.

Not every issue requires an immediate rollback.

Minor issues can often be addressed in a later patch release.

---

# Prerequisites

Before performing a rollback, ensure:

- Previous Docker image still exists in Docker Hub.
- Docker Compose configuration is available.
- Current deployment version is known.
- Previous stable version is identified.

Example:

```text
Current Version

v1.0.2

Previous Stable Version

v1.0.1
```

---

# Rollback Workflow

```text
Deployment Failure
        │
        ▼
Identify Last Stable Version
        │
        ▼
Update APP_VERSION
        │
        ▼
Pull Previous Image
        │
        ▼
Restart Containers
        │
        ▼
Verify Application
        │
        ▼
Incident Resolved
```

---

# Step 1 - Identify the Current Version

Verify the version currently deployed.

Example:

```properties
APP_VERSION=v1.0.2
```

Determine the last stable release.

Example:

```text
v1.0.1
```

---

# Step 2 - Update Deployment Version

Edit the deployment environment file.

Before:

```properties
APP_VERSION=v1.0.2
```

After:

```properties
APP_VERSION=v1.0.1
```

Save the file.

---

# Step 3 - Pull the Previous Image

Download the required Docker image.

```bash
docker compose pull
```

Docker downloads only the requested version.

No application build is performed.

---

# Step 4 - Restart the Application

Apply the deployment.

```bash
docker compose up -d
```

Docker Compose recreates the container using the previous image.

---

# Step 5 - Verify the Rollback

Confirm that the rollback completed successfully.

Check running containers.

```bash
docker compose ps
```

View logs.

```bash
docker compose logs
```

or

```bash
docker logs aqip-frontend
```

Verify the application.

- Login page loads.
- Dashboard works.
- Navigation works.
- Browser console has no errors.
- Health endpoint responds successfully.
- Version information matches the expected release.

Only after verification should the incident be considered resolved.

---

# Rollback Verification Checklist

Before closing the incident, confirm:

- Previous version is deployed.
- Container is running.
- Container is healthy.
- Application loads successfully.
- Core functionality works.
- Logs contain no startup errors.
- Monitoring reports healthy status.
- Users confirm the issue is resolved.

---

# Incident Response Example

Timeline:

| Time  | Action                         | Result                    |
| ----- | ------------------------------ | ------------------------- |
| 10:00 | Deploy v1.0.2                  | Successful                |
| 10:03 | Users report dashboard failure | Incident opened           |
| 10:05 | Rollback initiated             | Previous version selected |
| 10:06 | Docker Compose updated         | Rollback in progress      |
| 10:07 | Containers restarted           | Successful                |
| 10:08 | Application verified           | Incident resolved         |

Keeping a simple incident timeline helps teams understand what happened and improves future deployments.

---

# Common Mistakes

## Rebuilding the Application

Incorrect:

```text
Rollback

↓

npm install

↓

npm run build
```

Correct:

```text
Rollback

↓

Pull Previous Docker Image

↓

Restart Containers
```

Production should never rebuild the application.

---

## Modifying Running Containers

Avoid making manual changes inside production containers.

Containers should be treated as immutable.

If changes are required:

- Update source code.
- Create a new release.
- Publish a new Docker image.

---

## Using the latest Tag

Avoid deployments based only on:

```text
latest
```

Use versioned images instead.

Example:

```text
v1.0.1
```

Versioned images make rollback predictable.

---

## Skipping Verification

Rollback is not complete until the application has been verified.

Restarting containers alone does not guarantee a successful recovery.

---

# Best Practices

- Always release versioned Docker images.
- Keep previous releases available in Docker Hub.
- Test rollback procedures regularly.
- Document every production incident.
- Verify deployments immediately after release.
- Display application version information in the UI.
- Use immutable deployment artifacts.
- Avoid manual fixes in production.

---

# Future Improvements

As AQIP evolves, rollback will become increasingly automated.

Current process:

```text
Update APP_VERSION

↓

docker compose pull

↓

docker compose up -d
```

Future process:

```text
Update Deployment Repository

↓

GitHub Actions

↓

Server Deployment
```

Final GitOps process:

```text
Commit Previous Version

↓

Argo CD Detects Change

↓

Automatic Rollback
```

Regardless of the deployment platform, the rollback philosophy remains the same:

- Identify the last stable version.
- Redeploy that version.
- Verify application health.

---

# Lessons Learned

Every deployment should answer four questions:

1. What version is currently running?
2. What version is being deployed?
3. How do we verify the deployment?
4. How do we roll back if the deployment fails?

If these questions can be answered confidently, the deployment process is ready for production.

---

# Conclusion

Rollback is an essential part of every production deployment.

The AQIP Frontend deployment strategy is designed so that recovery is:

- Fast
- Predictable
- Repeatable
- Low risk

By using immutable Docker images, Semantic Versioning, GitHub Releases, and Docker Compose, production incidents can be resolved by restoring a previously verified version instead of rebuilding or modifying the application.

A successful deployment process is not one that never fails—it is one that can recover safely and consistently when failures occur.
