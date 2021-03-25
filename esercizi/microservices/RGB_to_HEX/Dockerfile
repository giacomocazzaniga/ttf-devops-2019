FROM node:alpine
COPY dist/ dist/
COPY package.json package.json
RUN npm install
CMD [ "node", "dist/RGB_to_HEX/src/HttpServer.js" ]