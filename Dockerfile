FROM node:16.13.2
WORKDIR /app
COPY package.json .
RUN npm install
RUN npm run build
COPY . ./
EXPOSE 80
CMD ["npm", "start"]