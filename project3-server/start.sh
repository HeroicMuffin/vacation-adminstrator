#!/bin/bash
./wait-for-it.sh ppshein-mysql:3306 -- npm run docker
npm start


