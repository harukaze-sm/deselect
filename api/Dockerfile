FROM node:14

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
ENV MONGO=mongodb://mongo:27017/deselect

RUN yarn build

EXPOSE 5000
CMD ["node", "dist/app.js"]