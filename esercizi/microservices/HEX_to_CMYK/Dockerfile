FROM node:alpine
COPY dist/ dist/
COPY package.json package.json
RUN npm install
EXPOSE 3000
CMD [ "node", "dist/HEX_to_CMYK/src/HttpServer.js" ]