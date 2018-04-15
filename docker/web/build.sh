#! /bin/sh

cd ../../multitest-web
npm install
docker build -f ../docker/web/Dockerfile -t multitest-web .
