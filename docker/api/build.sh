#! /bin/sh

cd ../../multitest-api
npm install
docker build -f ../docker/api/Dockerfile -t multitest-api .
