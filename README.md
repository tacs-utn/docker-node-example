# docker-node-example
A simple dockerized node webserver

This example add a node js script to the docker image based on node:latest.

It will start the server listening on 8080 port.

# Build and Running

$ docker build -t 'node-example:latest' .
$ docker run node-example