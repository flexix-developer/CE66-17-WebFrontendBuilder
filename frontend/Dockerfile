FROM node:20.9.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# WORKDIR /app

# COPY . .

# RUN npm ci

# RUN npm run build

# FROM node:20.9.0-alpine3.18

# WORKDIR /app

# RUN npm install -g serve

# COPY --from=build /app/build /app/build

# EXPOSE 3000

# ENTRYPOINT ["serve", "-s", "build", "-l", "3000"]
