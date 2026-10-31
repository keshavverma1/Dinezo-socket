
# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source code
COPY . .

# Build React application
RUN npm run build


# Stage 2: Production
FROM nginx:alpine AS production

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
