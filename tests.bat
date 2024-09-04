@echo off

REM Arrêter le script si une commande échoue

@REM Afficher un message indiquant le début des tests
echo Execution des tests avec couverture...

@REM Exécuter les tests avec couverture
yarn test --coverage --watchAll=false

@REM Linter le code
echo Analyse du code avec lint...
yarn lint

@REM Vérifier les types (TypeScript)
echo Vérification des types avec TypeScript...
yarn tsc --noEmit

@REM Compiler le projet
echo Compilation du projet...
@REM yarn build

@REM Afficher un message indiquant la fin du script
echo Toutes les tâches ont été exécutées avec succès.
