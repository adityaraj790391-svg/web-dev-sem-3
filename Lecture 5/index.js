// const os = require('os');

// console.log(os.platform());

// console.log(os.arch());

// console.log(os.hostname());

// console.log(os.version());

// console.log(os.uptime());

// console.log(os.totalmem()/1024/1024/1024);

// console.log(os.freemem()/1024/1024/1024);

// console.log(os.cpus().length);


const fs = require('fs');

fs.writeFile("data.txt","Hello", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File created successfully");
    }
});

fs.readFile("data.txt", "utf-8", (err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});