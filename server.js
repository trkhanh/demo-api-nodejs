const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./selfsigned.key', 'utf8');
var certificate = fs.readFileSync('./selfsigned.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3001);

//Here we are configuring express to use body-parser as middle-ware.

app.post('/test', function(req, res){

	console.log('RUN');
	res.end('1');
})	        




app.get('/', (req, res) => {
  res.send('Hello World!')
})



