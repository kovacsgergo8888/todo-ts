FROM node:14.16-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
RUN npm i

COPY ./src  /usr/src/app/src
COPY ./tsconfig.json /usr/src/app
RUN npm run build

ENTRYPOINT [ "node", "/usr/src/app/dist/main.js" ]

EXPOSE 4000
