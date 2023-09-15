FROM node:16.14-alpine

WORKDIR /appMD-frontend
COPY package* ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "dev" ]