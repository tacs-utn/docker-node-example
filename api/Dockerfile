FROM node:latest

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /app

# Install dependencies
RUN cd /app; \
    npm install --production

# Expose our server port.
EXPOSE 8080

# Run our app supposing the source is in /code directory
CMD ["node", "/app/example-api.js", "5"]
