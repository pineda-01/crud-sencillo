FROM node:22-alpine

WORKDIR /app

# Instala dependencias de compilación para SQLite
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install

COPY . .

# Permisos para la base de datos
RUN chmod a+rw /app/personas.db

EXPOSE 5000
CMD ["node", "server.js"]