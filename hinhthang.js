function add(a,b,cb) {
  setTimeout(()=>{
      if(typeof a !='number' && typeof b !='number')
        return cb(new Error('Tham so khong phai kieu so'));
        cb(undefined,a+b);
  },1000);
}
function mul(a,b,cb) {
  setTimeout(()=>{
      if(typeof a !='number' || typeof b !='number')
        return cb(new Error('Tham so khong phai kieu so'));
        cb(undefined,a*b);
  },1000);
}
function div(a,b,cb) {
  setTimeout(()=>{
      if(typeof a !='number' || typeof b !='number')
        return cb(new Error('Tham so khong phai kieu so'));
      if(b !=0)
        cb(undefined,a/b);
  },1000);
}
function tinhDienTich(a,b,h) {
  add(a,b,(err,rs)=>{
    if(err) return console.log(err);
    mul(rs,h,(er1,rs1)=>{
      if(er1) return console.log(er1);
      div(rs1,2,(er2,rs2)=>{
        if(er2) return console.log(er2);
        console.log("ket qua:"+ rs2);
      })
    })
  });
}
//tinhDienTich(4,5,2);
function  asynTinhDT(a,b,h,cb) {
  add(a,b,(err,rs)=>{
    if(err) return cb(err);
    mul(rs,h,(er1,rs1)=>{
      if(er1) return cb(er1);
      div(rs1,2,(er2,rs2)=>{
        if(er2) return cb(er2);
        cb(undefined, rs2);
      })
    })
  });
}

let kq=asynTinhDT(4,5,2,(err,rs)=>{
  if(err) console.log(err);
  console.log('ket qua'+ rs);
})
console.log(kq);
// add(4,2, (err,rs)=>{
//   if(err) return console.log(err);
//   console.log('Phep Cong:'+rs);
// })
// mul(4,2, (err,rs)=>{
//   if(err) return console.log(err);
//   console.log('Phep nhan:'+rs);
// })
// div(4,2, (err,rs)=>{
//   if(err) return console.log(err);
//   console.log('Phep chia:'+rs);
// })
