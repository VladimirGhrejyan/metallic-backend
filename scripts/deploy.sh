#!/bin/bash

set -e

cd /app || exit 1

echo "🚥 Stop current container..."
docker-compose down --remove-orphans

echo "📥 Pull recent changes..."
git pull origin main

echo "🔧 Build and start container..."
docker-compose up --build -d

echo "⏳ Waiting for start container..."
sleep 5

CONTAINER_ID=$(docker ps -qf "name=app")

if [ -z "$CONTAINER_ID" ]; then
  echo "❌ Container not found!"
  exit 1
fi

echo "🧬 Running migrations inside container $CONTAINER_ID..."
docker exec "$CONTAINER_ID" npm run migration:run

echo "✅ Deploy finished!"