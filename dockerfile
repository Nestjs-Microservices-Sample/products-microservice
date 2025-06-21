FROM node:21-alpine3.19

WORKDIR /usr/src/app

# Sólo copiamos package*.json para caché (no hay RUN npm install)
COPY package.json package-lock.json ./

# Copiamos el resto del código
COPY . .

EXPOSE 3000

# Arrancamos en modo watch
CMD ["npm", "run", "start:dev"]