#!/bin/bash

set -e
echo "Exécution des tests avec couverture..."
yarn test --coverage --watchAll=false
