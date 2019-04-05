#! /bin/sh

cd ../../multitest-web
hostAddress=$(hostname -I | cut -f1 -d ' ')
sed -i 's/localhost/'$hostAddress'/g' src/app/common/app-consts.ts
npm install
docker build -f ../docker/web/Dockerfile -t multitest-web .
git checkout HEAD --force
