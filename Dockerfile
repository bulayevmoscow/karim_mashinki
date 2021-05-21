FROM node:16-alpine

ENV PORT 3000




RUN npm install -g yarn next

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install
# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000
EXPOSE 80

# Running the app
CMD "yarn" "run" "custom_start_port_80"
