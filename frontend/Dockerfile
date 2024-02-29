# Use the specified Node.js version
FROM node:20-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including tailwindcss and framer-motion
RUN npm install

# If you specifically want to ensure these packages are installed,
# you can also run npm install for each package explicitly.
# This is not usually necessary if they are listed in your package.json.
# RUN npm install tailwindcss framer-motion

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
