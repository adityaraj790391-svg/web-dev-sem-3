// console.log(process.pid);
// console.log(process.pid);
// console.log(process.uptime());

// console.log(process.argv[6]);

function sum(a,b){
    return Number(a)+ Number(b);
}

console.log(sum(process.argv[2],process.argv[3]));

function calc(method){
    if (method === 'sum'){
        return Number(process.argv[2]) + Number(process.argv[3])
    }
}

console.log(calc(process.argv[4]));
