#Use Node/Alphine
FROM node:8.11.1-alpine

# Copy Node API
COPY build/multi-test-api.js /app/multi-test-api.js

# Change working directory
WORKDIR /app

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD ["node","multi-test-api.js"]
