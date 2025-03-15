FROM node:22.14-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit-dev

COPY . .

RUN chmod +x scripts/wait-for-it.sh

RUN npm run build

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD ["./scripts/wait-for-it.sh", "db", "5432", "--", "node", "dist/src/main.js"]
