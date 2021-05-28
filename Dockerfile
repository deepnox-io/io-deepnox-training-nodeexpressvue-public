FROM node:16.2.0-alpine

WORKDIR /app

# COPY ["package.json", "/app/"]
# COPY [".dockerfile/adds", "/"]

RUN npm install -g pm2

EXPOSE 3000

# ENTRYPOINT ["/opt/entry-point.sh"]
CMD ["/usr/local/bin/pm2-runtime", "start", "ecosystem.config.js"]
