FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json .

RUN yarn

COPY . .

RUN npm run build

#Production stage
FROM node:16-alpine AS production

WORKDIR /app

COPY package*.json .

RUN yarn ci --only=production

COPY --from=build /app/dist ./dist

CMD ["node", "dist/index.js"]