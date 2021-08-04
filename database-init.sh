#!/bin/bash

CURRENT_DIR=$(dirname "$0")

cd $CURRENT_DIR/server/src/Database &&
npx sequelize-cli db:drop &&
npx sequelize-cli db:create &&
npx sequelize-cli db:migrate &&
npx npx sequelize-cli db:seed:all
