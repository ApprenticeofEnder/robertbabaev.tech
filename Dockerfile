FROM node:18-alpine

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-mintimeout 100000 && npm config set fetch-retries 3 && npm config set fetch-retry-maxtimeout 600000

RUN npm ci --prefer-offline

# Copy all local files into the image.
COPY . .

RUN npm run build

CMD ["node", "./build"]
