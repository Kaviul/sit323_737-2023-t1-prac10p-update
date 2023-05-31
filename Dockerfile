FROM node:16-alpine
WORKDIR /app
COPY app .

EXPOSE 1336
RUN npm install
RUN npm install node-wget
CMD ["npm" ,"start"]