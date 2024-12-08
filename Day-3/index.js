// 07/12/2024

// read file (file can be any types like(docx,xlsx,pptx,txt,pdf))
/*
const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    fs.readFile("file.txt",(err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();
    });
}).listen(8000);
*/

// AppendFile (file can be in any format like (pdf,docx,xlsx,pptx.txt))
/*
const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    fs.appendFile("suraj.pdf","Hello i am Suraj from Cybrom Bhopal",(err)=>{
        if(err) throw err;
        console.log("File successfully Created !!!");
    })
    fs.appendFile("suraj.pdf"," My Course is FullStack Developement !!",(err)=>{
        if(err) throw err;
        console.log("File successfully Created !!!");
    })
}).listen(8000);
*/

// open file : (It will create a file but not write)
/*
const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    fs.open("open.docx","w",(err,file)=>{
        if(err) throw err;
    })
}).listen(8000);
*/

// writeFile : It will create and write text inside this file.
const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    fs.writeFile("write.pptx","Hell I am SURAJ KUMAR",(err)=>{
        if(err) throw err;
    })
}).listen(8000);