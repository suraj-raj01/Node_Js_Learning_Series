// 05/12/2024
/*
var http = require("http");
http.createServer((req,res)=>{
    res.write("<h1>Welcome to Cybrom Bhopal</h1>");
    res.end();
}).listen(8000);

*/

let http = require("http");
const server = http.createServer((req,res)=>{
    res.write("<h1>This is Node first Program</h1>")
    res.end("<b>Our Server ends.....</b>")
})
server.listen(8000,()=>{
    console.log("server run on 8080!"); 
})
