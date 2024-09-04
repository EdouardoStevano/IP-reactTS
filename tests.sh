#!/bin/bash

# Arrêter le script si une commande échoue
set -e

# Afficher un message indiquant le début des tests
echo "Exécution des tests avec couverture..."

# Installer les dépendances
yarn install

# Exécuter les tests avec couverture
yarn test --coverage --watchAll=false

# Linter le code
echo "Analyse du code avec lint..."
yarn lint

# Vérifier les types (TypeScript)
echo "Vérification des types avec TypeScript..."
yarn tsc --noEmit

# Compiler le projet
echo "Compilation du projet..."
yarn build

# Afficher un message indiquant la fin du script
echo "Toutes les tâches ont été exécutées avec succès."
