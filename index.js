let fs = require('fs');
//fs.readFile('./a.txt');

 let read=(duongdanfile)=>{
   return new Promise((resolve,reject)=>{
     fs.readFile(duongdanfile,'utf8',(err,rs)=>{
       if(err) reject(err);
       else {
         resolve(rs);
       }
     })
   });
 };
read('./a.txt').then(
  
);
