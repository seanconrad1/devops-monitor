FROM node:18-alpine3.18

WORKDIR /app

COPY package*.json tsconfig.json ./
COPY prisma ./prisma

RUN npm install

RUN npm install prisma --save-dev

RUN npx prisma generate


COPY . .

RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "start"]