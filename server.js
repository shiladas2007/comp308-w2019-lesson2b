http = require('http');
const hostname='127.0.0.1';
const port=3000;
/*function ServerParams(req,res)
{ res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');

}
const server = http.createServer(ServerParams);*/
//const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Student ID: 300969886; Name: Shila Rani Das\n');
  });
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
