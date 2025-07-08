# Start with an official Node.js LTS image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Set environment variables for staging
ENV NODE_ENV=staging
ENV PORT=8080

# (Optional) install additional tools for staging, like nodemon
RUN npm install -g nodemon

# Expose the port your app runs on (change if needed)
EXPOSE 8080

# Set the command to start your app
CMD [ "node", "index.js" ]
