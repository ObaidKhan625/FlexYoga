FROM node:16.13.0

WORKDIR /frontend

COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "start"]