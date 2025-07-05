FROM node:18-alpine
WORKDIR /app
COPY index.js ./
RUN npm config set registry https://registry.npmmirror.com && \
    npm init -y && \
    npm install express cors
EXPOSE 3000
CMD ["node", "index.js"] 