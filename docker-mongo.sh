#!/bin/bash
docker run -d -p 8081:8081 -p 27017:27017 --name mongodb --rm \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=123456 \
  mongo:latest
