FROM node:16
WORKDIR /server/ 
COPY ["package.json", "package-lock.json*", "./"]
EXPOSE 4000
RUN npm install --production
RUN npm i cors
COPY . .
CMD [ "node", "index.js" ]
