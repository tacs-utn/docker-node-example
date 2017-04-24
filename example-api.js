var http = require("http");

const serverPort = 8080;

function handleRequest(request, response){
    try{
        var domain = request.headers.host;
        var method = request.method;
        var url = request.url;
        var calledActionURI = method + " " + domain + url;

        console.log("Receiving request... " + calledActionURI);
        randomItem(response);
    }catch(e){
        console.log(e);
        response.writeHead(500, {"Content-Type": "application/json"});
            message = JSON.stringify({ 
                error: e
            });
        response.end(message);
    }
}

function initialize(){        
    var server = http.createServer(handleRequest);
    server.listen(serverPort, function(){
        console.log("\n\nServer listening on: http://localhost:%s", serverPort);
    });
}

process.on('SIGINT', function() {
    process.exit();
});

initialize();


function randomItem(response) {
  response.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item " + getRandomInt(1000, 4000), "item " + getRandomInt(1000, 4000)];
    var json = JSON.stringify({ 
        items: otherArray, 
        description: "This is a randomly generated items list"
    });
  response.end(json);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}