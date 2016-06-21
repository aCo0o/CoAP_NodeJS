// For full documentation please visit: https://github.com/mcollina/node-coap

var coap    = require('coap') 
var server  = coap.createServer();
var payload = "--------------------\n"+
              "Welcome to the second coAP-server(coap2)\n"+
              "Hosted By Granit Demiraj & Aleksandar Cincarevic\n"+
              "---------------------\n";


var theText = " ______                ______     ______   \n";
    theText +="|                     |      |   |      |  \n";
    theText +="|           ______    |      |   |______|  \n";
    theText +="|          |      |   |______|   |         \n";
    theText +="|          |      |   |      |   |         \n";
    theText +="|______    |______|   |      |   | NodeJS  \n";



console.log(theText);
server.on('request', function(req, res) {


// GET // POST // PUT // DELETE // 

  // GET
  // // // // // // // // // // // // // // // // // // // //
  if(req.method == "GET") 
  {
    console.log("Method:", req.method, "\nPayload:", req.payload);
    payload += "\nThis is a GET";
    res.end(theText + "\n\n" + payload)
  }
  
  // POST
  // // // // // // // // // // // // // // // // // // // //
  else if(req.method == "POST") 
  {
    console.log("Method:", req.method, "\nPayload:", req.payload);
    payload += "\nThis is a POST: " + req.payload;
    res.end(payload)
  }
  
  // PUT
  // // // // // // // // // // // // // // // // // // // //
  else if(req.method == "PUT")
  { 
    console.log("Method:", req.method, "\nPayload:", req.payload);
    payload += "\nThis is a PUT: " + req.payload;
    res.end(payload);
  }
  
  //DELETE
  // // // // // // // // // // // // // // // // // // // //
  else if(req.method == "DELETE")
  {
    console.log("Method:",req.method , "\nPayload:", req.payload);
    payload += "\nThis is a DELETE: " + req.payload;
    res.end(payload);
  }
  

  //CoAP OBSERVE
  // // // // // // // // // // // // // // // // // // // //
  else if(req.headers['Observe'] == 0)
  { 
    var interval = setInterval(function() {
      res.write("Observe the server."+"\n"+"As soon as the payload changes, the server automaticlly sends a new version of payload."+ "\n" + new Date().toISOString());
    }, 1000)

    res.on('finish', function(err) {
      clearInterval(interval)
    })
  
  }
  else
  {
    res.write(payload);
    res.end();
  }

});// END server on

server.listen(function() {
  console.log('coAP-server started');
})


// For full documentation please visit: https://github.com/mcollina/node-coap
