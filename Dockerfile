# Первый этап - сборка приложения
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --omit=dev

# Второй этап - настройка Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/rivid.web/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
