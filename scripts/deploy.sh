#!/bin/bash

set -e

cd ~/app || exit 1

echo "🚥 Stop current container..."
docker-compose down --remove-orphans

echo "📥 Pull recent changes..."
git pull origin production

echo "🔧 Build and start container..."
docker-compose up --build -d

echo "⏳ Waiting for start container..."
sleep 5

CONTAINER_NAME="backend-app"

if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
  echo "❌ Container ${CONTAINER_NAME} not found!"
  exit 1
fi

echo "🧬 Running migrations inside container ${CONTAINER_NAME}..."
docker exec "$CONTAINER_NAME" npm run migration:run

echo "✅ Deploy finished!"