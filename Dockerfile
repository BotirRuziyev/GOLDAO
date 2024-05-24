FROM node:18-alpine

WORKDIR /app
COPY .output /app/

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", "/app/server/index.mjs"]


