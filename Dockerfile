FROM node:22.14-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit-dev
RUN npm install ts-node tsconfig-paths

COPY . .

RUN chmod +x scripts/wait-for-it.sh
RUN chmod +x scripts/deploy.sh

RUN npm run build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD ["./scripts/wait-for-it.sh", "public-vultr-prod-c06b4d6d-2e1e-4867-9dc6-8ad331086cef-vultr-pr.vultrdb.com", "16751", "--", "node", "dist/src/main.js"]
