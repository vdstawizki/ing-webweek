FROM node:10

ARG NPM_TOKEN

COPY linux-x64-64_binding.node .
COPY node-v10.13.0-headers.tar.gz .

RUN mkdir -p ~/.node-gyp/10.13.0
RUN tar -xf node-v10.13.0-headers.tar.gz --directory ~/.node-gyp/10.13.0/ --strip-components 1

WORKDIR /app

ARG SASS_BINARY_PATH
ENV SASS_BINARY_PATH=/app/linux-x64-64_binding.node

COPY package.json package.json
COPY .npmrc .npmrc
RUN npm install --nodedir=~/.node-gyp/10.13.0/ node-gyp node-sass
RUN npm install

COPY . ./

RUN rm -f .npmrc

CMD ["npm", "start"]
EXPOSE 8080

