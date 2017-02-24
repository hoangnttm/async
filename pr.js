// let aPromise=new Promise((resolve,reject)=>{
//   // resolve();//có thể truyền về 1 tham số
//   // reject();//có thể truyền về 1 tham sôs
// });
// aPromise.then(
//   ()=>{console.log("Thanh cong");}, //function được thực khi function resolve được gọi tren bien aPromise
//   ()=>{console.log("that bai");}//và function tiếp theo được thực thi khi reject được gọi trên bien aPromise
// );
// ứng dụng phương thức add trong bài hinhthang.js
/*
let aPromise1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(typeof 4 !='number' && typeof 6 !='number'){
      reject(new Error('Tham so khong phai kieu so'));}
      resolve(4+5);
  },1000);
});
aPromise1.then(
  (res)=>{console.log("Thanh cong",res);}, //function được thực khi function resolve được gọi tren bien aPromise
  (err)=>{console.log("that bai",err+"");}//và function tiếp theo được thực thi khi reject được gọi trên bien aPromise
);
*/
//viet theo 1 function để có thể tái sử dựng
function add(a,b) {
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(typeof a !='number' || typeof b !='number'){
       reject(new Error('Tham so khong phai kieu so'));}
       resolve(a+b);
   },1000);
 });
}
//sử dụng function add
add(6,4).then(
  (rs)=>console.log('Ket qua',rs),
  (err)=>console.log(err)
);
function mul(a,b) {
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(typeof a !='number' || typeof b !='number'){
       reject(new Error('Tham so khong phai kieu so'));}
       resolve(a*b);
   },1000);
 });
}
function div(a,b) {
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(typeof a !='number' || typeof b !='number' || b ==0){
       reject(new Error('Tham so đầu vào không đúng'));}
       resolve(a/b);
   },1000);
 });
}
/*
add(6,4)
.then((kqcong)=>mul(kqcong,4)
.then((kqnhan)=>div(kqnhan,0)
.then((kqchia)=>console.log(kqchia))))
.catch(err=>console.log(err+''))
*/
//wrap thanh function tinhDienTich

function promiseTinhdientich(a,b,h)
{
  return add(a,b)
  .then((kqcong)=>mul(kqcong,h)
  .then((kqnhan)=>div(kqnhan,2)))
}
//su dung promiseTinhdientich
promiseTinhdientich(4,5,6)
.then(kq=>console.log('ket qua:'+kq))
.catch(err=>console.log(err+''));
