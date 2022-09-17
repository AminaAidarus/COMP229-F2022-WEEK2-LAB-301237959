//importing third-party connect module
const connect = require('connect');

//instantiate app-server
const app = connect();

function logger(req, res, next){
    console.log(req.method, req.url);
    next();
}
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
    res.end({"message":"Hello from NodeJS Application as json"});
}

//add middleware to connect application
//app.use('/',helloPlain);
app.use('/html', helloHtml);
app.use('/json', helloJson);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000/');
