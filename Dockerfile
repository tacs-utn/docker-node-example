FROM node:latest


EXPOSE 8080

ADD ./example-api.js /code/example-api.js

CMD ["node", "/code/example-api.js"]