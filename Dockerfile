# Dockerfile
# Stage 1: Build the React app
FROM node:latest AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:stable-alpine

# Copy the built React app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 and 443
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
