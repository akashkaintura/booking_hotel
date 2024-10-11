#!/bin/bash

# Authenticate Docker to ECR
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-ecr-url>

# Build Docker images
docker build -t booking-backend ./backend
docker build -t booking-frontend ./frontend

# Tag images for ECR
docker tag booking-backend <your-ecr-url>/booking-backend:latest
docker tag booking-frontend <your-ecr-url>/booking-frontend:latest

# Push images to ECR
docker push <your-ecr-url>/booking-backend:latest
docker push <your-ecr-url>/booking-frontend:latest

# Deploy to ECS (optional)
aws ecs update-service --cluster <your-cluster> --service <your-service> --force-new-deployment
