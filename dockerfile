FROM node:20-alpine

WORKDIR /project

COPY . .

RUN ls -la
RUN npm install

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]