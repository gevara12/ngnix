# FROM node:latest
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]

FROM oven/bun

WORKDIR /app
COPY . .
COPY package*.json ./

RUN bun install
RUN bun run build
EXPOSE 3000

CMD ["bun", "--bun", "run", "start"]