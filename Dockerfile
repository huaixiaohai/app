FROM node:laster
COPY ./ /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "run", "serve"]
