FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js", "-h", "0.0.0.0", "-p", "8080", "-c", "./cache"]
