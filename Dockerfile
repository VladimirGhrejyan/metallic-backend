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

CMD ["./scripts/wait-for-it.sh", "db-metallic-fra1-24631-do-user-19991779-0.l.db.ondigitalocean.com", "25060", "--", "node", "dist/src/main.js"]
