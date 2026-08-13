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

// fs.writeFile("data.txt","Hello", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File created successfully");
//     }
// });

// fs.readFile("data.txt", "utf-8", (err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(res);
//     }
// });

// fs.appendFile("data.txt", "\nOrigin Stone ", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File updated successfully");
//     }
// });

// fs.unlink("data.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File deleted successfully");
//     }
// });


// const data = {energy: "Shadow Energy", power: "Infinite", origin: "Unknown"};

// fs.writeFile("data.json", JSON.stringify([data],null,2), (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Data saved successfully");
//     }
// });

// let newdata = {newtechnique: "Meteor Shower"};

// fs.readFile("data.json", "utf-8", (err,res)=>{
//     if(err){
//         console.log(err);
//     }else{
//         let temp = JSON.parse(res);
//         console.log(temp);
//         temp.push(newdata);
//         fs.writeFile("data.json", JSON.stringify(temp,null,2), (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log("Data updated successfully");
//             }
//         });
//     }
// });


// const path = require("path");

// console.log(path.join(path.dirname("home/user/data/file.txt")));
// console.log(path.basename(path.dirname("home/user/data/file.txt")));
// console.log(path.join(path.extname("home/user/data/file.txt")));


// const filepath = path.join("home","user","data","file.txt");
// console.log(filepath);

// fs.mkdir(path.dirname(filepath), {recursive: true},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         fs.writeFile(path.basename(filepath), "Hello", (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log("File created successfully");
//             }
//         });
//     }});



const crypto = require("crypto");
let password1 = "seaoftheafterlife";
let password2 = "seaoftheafterlife";

let encrypt1 = crypto.createHash("sha256").update(password1).digest("hex");
let encrypt2 = crypto.createHash("sha256").update(password2).digest("hex");

console.log(encrypt1);
console.log(encrypt2);













