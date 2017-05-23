#!/bin/bash 

docker build -t tacs-utn/api-example api
docker build -t tacs-utn/api-db database
echo 'Running Database...'
docker run -d --name database tacs-utn/api-db
echo 'Running API...'
docker run -d -p 8080:8080 --name api --link database:db tacs-utn/api-example
