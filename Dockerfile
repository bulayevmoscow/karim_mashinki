FROM debian:latest

ENV PORT 3000



WORKDIR ~

RUN apt-get update
# install curl
RUN apt-get install curl -y
# get install script and pass it to execute:
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash
# and install node
RUN apt-get install nodejs npm -y

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

# Running the app
CMD "yarn" "start"
