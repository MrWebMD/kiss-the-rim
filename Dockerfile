FROM node:16.13.2
ENV NODE_ENV=production
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 80
CMD ["npm", "start"]