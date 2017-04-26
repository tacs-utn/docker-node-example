# docker-node-example
A simple dockerized node webserver

This example include a node js webserver script to the docker image based on node:latest.

It will start the server listening on port 8080.

# Build and Running

$ docker build -t 'node-example:latest' .

$ docker run -p8080:8080 node-example

$ curl localhost:8080 (in another terminal)




