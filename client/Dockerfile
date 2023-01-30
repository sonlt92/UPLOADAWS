# Use a Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the app's files to the container
COPY . .

# Specify the command to run when the container starts
CMD ["npm", "start"]

