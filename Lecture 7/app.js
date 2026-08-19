const http= require("http");

const server =http.createServer((req,res)=>{

    // res.write("<h1>hello<h1>")
    // res.write("<p>hyh<p>")
    // res.end()
    // if(req.url==="/"){
    //     res.write("<h1>home</h1>")
    //     res.end();

    // }
    // if(req.url==="/about"){
    //     res.write("<h1>about</h1>")
    //     res.end();
    // }

    // console.log(req.method);
    // res.end();

    // if(req.method === "GET"){
    //   res.write("<h1> GET </h1>");
    //   res.end();
    // }

    // if(res.method === "POST"){
    //   res.write("<h1>POST</h1>")
    //   res.end();
    // }

    // if (req.url === '/user' &&  req.method === "GET"){
    //   res.write("<h1> data retrieved </h1>");
    //   res.end();
    // }

    // if (req.url === '/user' &&  req.method === "POST"){
    //   res.write("<h1> data CREATED </h1>");
    //   res.end();
    // }

    // console.log(req.headers);
    // console.log(req.headers.token);
    // res.end();

    let data = ""

    req.on("data", (chunk) => {
      data = data + chunk
    })
    req.on("end", () => {
      console.log(data);
      res.end()
    })
})

server.listen(3000,()=>{
    console.log("server is running port 3000")
})