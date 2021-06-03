FROM node:latest

RUN yarn install
WORKDIR /app/website 
COPY . /app/website
RUN yarn build
EXPOSE 3000
ENTRYPOINT yarn serve
