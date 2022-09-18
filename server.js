/* 
Name: Amina Aidarus
Student number: 301237959
COURSE: COMP229
SEM: 3
LAB : 2
DESCRIPTION: Create a new Node.Js Application that listens to http requests on port 3000 and return 3 different HTTP responses
*/

//importing third-party connect module
const connect = require('connect');

//instantiate app-server
const app = connect();

//custom middleware
function helloPlain(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end("Hello from NodeJS Application");
}

//custom middleware
function helloHtml(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Hello from NodeJS Application as html</h1>");
}

//custom middleware
function helloJson(req, res, next){
    res.setHeader('Content-Type','application/json');
    res.end('{"message":"Hello from NodeJS Application as json}');
}

//add middleware to connect application
app.use('/html', helloHtml);
app.use('/json', helloJson);
app.use('/',helloPlain);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
