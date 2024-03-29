FROM node:20.9.0 as build

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM node:20.9.0-alpine3.18

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/build /app/build

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build", "-l", "3000"]
