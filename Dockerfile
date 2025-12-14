FROM node:lts-alpine3.18

# set the working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY client/package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code
COPY client/ ./

ENV NEXT_TELEMETRY_DISABLED=1
ENV BUILD_STANDALONE=false

# build the application
RUN npm run build

# expose the port the app runs on
EXPOSE 3000

# start the application
CMD ["npm", "start"]
