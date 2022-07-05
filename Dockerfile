FROM node:14.15.4-alpine
#ARG port
USER root
COPY . /soar-frontend
WORKDIR /soar-frontend

RUN npm install
RUN npm run build

#EXPOSE $PORT

#CMD export APP_PORT=$PORT && npm run heroku:serve