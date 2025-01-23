FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json .

RUN yarn

COPY . .

RUN yarn install
RUN yarn build

#Production stage
FROM node:16-alpine AS production

WORKDIR /app

COPY package*.json .

RUN yarn install
RUN yarn build

COPY --from=build /app/dist ./dist

CMD ["node", "dist/index.js"]