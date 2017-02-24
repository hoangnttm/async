//
// async function funcName() {
//   console.log('hello');
// }
// //doi voi async cho arrow function
// let mull= async()=>{
//   console.log('Arrow function');
// }
//
function add(a,b) {
 return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     if(typeof a !='number' || typeof b !='number'){
       reject(new Error('Tham so khong phai kieu so'));}
       resolve(a+b);
   },1000);
 });
}
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
 let showAdd=async(a,b)=>{
   let tong=await add(a,b);
   //caau lenh console.log se chay sau khi function bat dong bo add() chay xong
   console.log(tong);
 }
 let tinhDienTich=async (a,b,h)=>{
   let tong=await add(a,b);
   let nhan=await mul(tong,h);
   let kq=await div(nhan,2);
   console.log('dien tich',kq);
 }
 //tinhDienTich(4,5,'6');
 //cacsh bat loi
 let tinhDienTich2=async (a,b,h)=>{
   try {
     let tong=await add(a,b);
     let nhan=await mul(tong,h);
     let kq=await div(nhan,2);
     return Promise.resolve(kq);
     //console.log('dien tich',kq);
   } catch (e) {
     return Promise.reject(e)
 }
}
//va su dung
tinhDienTich2(5,'6','7').then(
  res=>console.log('ketqua: '+res)
)
.catch(err=>console.log('Loi roi nha'+err))
