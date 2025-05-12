FROM node:23.11.0-alpine

WORKDIR /api

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

CMD ["node", "dist/server.js"]
