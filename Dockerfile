# ---------- Stage 1 : Build ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

# ---------- Stage 2 : Runtime ----------
FROM nginx:1.28-alpine

ARG APP_VERSION=dev

LABEL org.opencontainers.image.title="AQIP Frontend"
LABEL org.opencontainers.image.description="Apparel Quality Inspection Platform Frontend"
LABEL org.opencontainers.image.version=$APP_VERSION
LABEL org.opencontainers.image.authors="Satish Kalla"

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]