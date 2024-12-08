// 06/12/2024
const http = require("http");
const clg = require("./Cybrom")
http.createServer((req,res)=>{
    res.write(clg.MyCollege())
    res.write(clg.MyFees())
    res.write(clg.MyCourse())
    res.end();
}).listen(8000);