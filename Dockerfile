FROM node:22 as development

WORKDIR /src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src/app

COPY --from=development /src/app/ .

EXPOSE 8080

CMD [ "node", "dist/main" ]