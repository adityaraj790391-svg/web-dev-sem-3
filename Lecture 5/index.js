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

fs.appendFile("data.txt", "\nOrigin Stone ", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File updated successfully");
    }
});

fs.unlink("data.txt", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File deleted successfully");
    }
});


const data = {energy: "Shadow Energy", power: "Infinite", origin: "Unknown"};

fs.writeFile("data.json", JSON.stringify([data],null,2), (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data saved successfully");
    }
});

let newdata = {newtechnique: "Meteor Shower"};

fs.readFile("data.json", "utf-8", (err,res)=>{
    if(err){
        console.log(err);
    }else{
        let temp = JSON.parse(res);
        console.log(temp);
        temp.push(newdata);
        fs.writeFile("data.json", JSON.stringify(temp,null,2), (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Data updated successfully");
            }
        });
    }
});












