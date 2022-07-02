FROM node:14.15.4-alpine
ARG port
USER root
COPY . /soar-frontend
WORKDIR /soar-frontend

ENV PORT=$port
RUN npm install

EXPOSE $PORT

CMD npm run serve