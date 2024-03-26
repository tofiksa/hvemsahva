# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16.3-alpine3.12 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ENV API_KEY="d1WZ6hUHEXtGJzHkle79pA=="
ENV API_SECRET="gBfknDkqFLvNXFEG/arw8NtqCTPtOkxF7ohX8bqDzzE="
ENV SUPABASE_URL="https://kdhaitlddslpxphpcnvc.supabase.co"
ENV SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkaGFpdGxkZHNscHhwaHBjbnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExODI3ODksImV4cCI6MjAyNjc1ODc4OX0.dbS0y-hKuH3m5fGdtX_eeYKVYKdiGs2iVf61EUmMkH4"
RUN node backend/server.js && npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf
