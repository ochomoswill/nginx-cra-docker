# Name the node stage "builder"
FROM node:lts-gallium AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# Get build argument and set environment variable
ARG BASENAME
ENV REACT_APP_BASENAME=$BASENAME
# install node modules and build assets
RUN yarn install && yarn build



# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
# RUN rm -rf ./*
# Make directory for accounts
RUN mkdir accounts
# Copy static assets from builder stage
COPY --from=builder /app/build ./accounts
# Copy nginx conf
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
