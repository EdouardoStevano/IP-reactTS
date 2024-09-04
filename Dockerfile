# Build de l'application avec Node.js
FROM node:21-alpine AS builder

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copie des fichiers de dépendances et installer les dépendances
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copie du reste du code source
COPY . .

# Utilisation des variables d'environnement de production
COPY .env.production .env

# Construiction de l'application
RUN yarn run build

# Servir l'application avec Nginx
FROM nginx:stable-alpine

# Copiee des fichiers construits depuis l'étape précédente
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Copie de la configuration personnalisée de Nginx
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

# Suppression des fichiers de configuration par défaut (optionnel)
RUN rm /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Utilisation d'un utilisateur non-root pour Nginx
USER nginx

# Démarrege de Nginx
CMD ["nginx", "-g", "daemon off;"]
