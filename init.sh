#!/bin/bash

CURRENT_DIR=$(dirname "$0")

npm install

cd $CURRENT_DIR/client &&
npm install &&
cp ./.env.example ./.env &&
cd ./..

cd $CURRENT_DIR/server &&
npm install &&
cp ./.env.example ./.env &&
cd ./..

