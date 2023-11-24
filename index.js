// let form=document.forms
// // var b={}
// form[0].addEventListener("submit",(e)=>{
//     e.preventDefault()
// let obj={
//  user:e.target[0].value,
// //  pass:e.target[1].value,
// }

// // fetch(" http://localhost:3000/posts",{
// // method:"POST",
// // headers:{"Content-Type": "application/json"},
// // body:JSON.stringify(obj)
// // })
// // 
// // fetch("http://localhost:3000/posts/2",{
// //     method:"PUT",
// //     headers:{"Content-Type": "application/json"},
// // body:JSON.stringify({user:"karthikkk"})
// // })



// // fetch(" http://localhost:3000/posts/10",{
// //     method:"DELETE",
// // })

// // .then((val)=>{
// //     return val.json()
// // }).then((val)=>{
     
// //     let div=document.getElementById("div")
    
// //      val.map((val,ind)=>{
// //         let div1=document.createElement("div")
// // div1.innerHTML=`<p>${val.id}</p>
// // <h1>${val.user}</h1>
// // <h1>${val.pass}<h1>`

// //         div.appendChild(div1)

// //      })

// // })

// // fetch("  http://localhost:3000/posts",{
// // method:"POST",
// // headers:{"Content-Type" : "application/json"},
// // body:JSON.stringify(obj)
// // })



// // let button=document.getElementById("btn")

// // form[0].addEventListener("click",(e)=>{
// // e.preventDefault()
// // fetch("  http://localhost:3000/posts",{
// // method:"GET",
// // })
// // .then((val)=>{
// //     return val.json()
// // }).then((val)=>{
// //     let div=document.getElementById("div")
    
// //     let div1=document.createElement("div")
// //  val.map((val,ind)=>{

// // div1.innerHTML=`<h3>${val.user}</h3>`

// //  })
// //  div.appendChild(div1)
// //  })
// // })
// })
// // console.log(b)
// let a=10
// let b=8
// let c=(a>b)?a:b;
// console.log(c);


// let arr=[1,2,3,4,7]
//         let b=[]
//         for (let i = 1; i <= 7; i++) {
//            if (!arr.includes(i)) {
//                 b.push(i)
//                 // break;
//            }
//         }
//         console.log(b) 
// let string = 'GeeksForGeeks'; 
// let newstring = string.replace(/[g]/gi, 'GfG'); 
// console.log(newstring);
//  a=[1,2,3,4]

// for(i=0;i<a.length/2;i++){
// [a[i],a[a.length-1-i]]=[a[a.length-1-i],a[i]]
// }

// // a.reverse()
// console.log(a)

//  for(i=0;i<a.length;i++){
// for(j=0;j<a.length-1-i;j++){
// if(a[i]<a[j]){

// [a[i],a[j]]=[a[j],a[i]]
// }
// }
//  }


// console.log(a);



// let a="abc"
// let b="abcdefa"
// c=0
// for(i=0;i<b.length;i++){
// if(a[i]==b[i]){
// c++
// }
// }
//  console.log(c);





// let a=[1,2,3,4,6]
// b=""
// for(i=0;i<a.length;i++){
//     if(a[i]!=i+1){
// b+=i+1
//     }
// }
// console.log(b);

//  let a=[1,2,3,4,5,6]
 
// for(i=0;i<a.length;i++){
// for(j=0;j<a.length;j++){
// if(a[j]<a[j+1]){
//         console.log(a);
// [a[j],a[j+1]]=[a[j+1],a[j]]
// }
// }
// }
// console.log(a);

// let b="silent"
// let a=b.split("")
// for(i=0;i<a.length;i++){
// for(j=0;j<a.length;j++){
// if(a[j]>a[j+1]){
// [a[j],a[j+1]]=[a[j+1],a[j]]
// }
// }
// }
//  console.log(a);
// let c="listen"
// let d=c.split("")
// for(i=0;i<d.length;i++){
// for(j=0;j<d.length-1-i;j++){
// if(d[j]>d[j+1]){
// [d[j],d[j+1]]=[d[j+1],d[j]]
// }
// }
// }
//  console.log(d);

//         if(a.join("")==d.join("")){
//                 console.log("its anagram");
//         }else(console.log("not a angram word"))
// for(i=0;i<a.length;i++){
// if(a[i]==d[i]){
//         var f=true
// }
// }
//  if(f){
//  console.log("its anagram");
//  }else(console.log("not a angram word"))

// let a=[1,2,3,4,5,6]
// for(i=0;i<a.length ; i++){
//     for(j=i+1;j<a.length;j++){
//         if(a[i]<a[j]){
//         [a[i],a[j]]=[a[j],a[i]]
//         }
//     }
// }
// console.log(a)
// 
// let a="sai"
// console.log({a});
// let a=42;
// let b=222;
// let c;
// a>b?c=a:c=b;
// i=c;
// while(c!=0){
// if(i%a==0&&i%b==0){
// console.log(i)
// break;
// }
// i++

// }


// a="Hii iamram"
// b=[]
// c=0
// for(i=0;i<a.length;i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }else{
//         c.push(a[i])
//     }
// }
// console.log(c)
// let a=[1,2,2,3,3,4,5,5]
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
// if(a[i]==a[j]){
//     if(!b.includes(a[i])){
//         b.push(a[i])
     
//     }else{
//         c.push(a[i])
//     }
// }
// }  
// }
//    let d=c
//    f=[]
//    y=0
//    for(i=0;i<d.length;i++){
//          if(!f.includes(d[i])){
//     y++
//        }
//    }
    // console.log(y)

// for(i=0;i<a.length;i++){
//  for(j=0;j<a.length;j++){
// if(a[i]==a[j]){
//  b.push(a[i])
// }
//  }
// }
 



// let a=[1,2,3,4,5]
// let i=0;
 
// let target=0

// while(i<j){

// }
//  console.log(target);

// let a=[2,3,3,4,5,6,6,8,8,8,12,12]
// d=[]
//  for(i=0;i<a.length;i++){
//     if(a[i]==a[i+1]){
//        d.push(a[i])
//        }
//  }
//  let bb= new Set(d)
// console.log(bb.size);



// let a=[1,3,4,2,8,6,7]
// for(i=0;i<a.length;i++){
//   for(j=0;j<a.length;j++){

//     if(a[j]>a[j+1]){
//       [a[j],a[j+1]]=[a[j+1],a[j]]
//     }
//   }
// }
// console.log(a);
// let a=[1,2,4,5,66,77]
// let b=66
// for(i=0;i<a.length;i++){
// if(a[i]==b){
// console.log(i);
// }else{
//   console.log("-1");
// }
// }
// let a=[1,2,4,5,66,77]
// let b=66
// let c=-1
// for(i=0;i<a.length;i++){
//   //              
// if(a[i]==b){
// c=i
// } 
 
// }
// console.log(c);


 //let a=[1,2,3,4,5,6,7,8,9]
//  let i=0
//  let j=i+1
//  let b=""
  
// for (i=0;i<a.length;i++){
// if(a[i]%2==0){
// b+=a[i]
// }
// }
// console.log([b]);

// let a=[1,2,3,4,5,6,7,8,9,10]
// let b=[]
// for(i=0;i<a.length;i++){
//       a[i] == 1
//         ? b.push("one")
//         : a[i] ==2
//         ? b.push("two")
//         : a[i] == 3
//         ? b.push("three")
//         : 'unknown';
// }
// console.log(b);




// let a=[1,2,4,6,7,8,10,25]
// let b=[]
// let c=1
// for(i=1;i<a.length+c;i++){
// //     console.log(a[i]);
// if(!a.includes(i)){
//  c++
//  b.push(i)

// }else{
//   b.push(i)
// }
 
// }
// //  for(i=1;i<a.length+c;i++){
// //     if(!a.includes(i)){
// //         b.push(i)
// //        }
// //        else{
// //        b.push(i)
// //        }
// //  }
//  console.log(b);





// let v=[1,2,3,4,5,6,7,8,9,10];

// let b=[];

// let i=0;

// while (i<v.length) {

//   if(v[i]%2==0){

//     b[b.length]=v[i]

//   }
//   i++
  
// }
// console.log(b);





// let v=[1,2,3,4,5,6,7,8,9,10];

// let b=[];

// for( let i=0;i<v.length; i++){
//   if(v[i]%2==0){
//     b[b.length]=v[i]
//   }
// }

// console.log(b);



// let a=[1,2,3,5,6,8,9]
// let i=0;
// let j=a.length-1
// let target=13
// while(i<j){
// let count=a[i]+a[j]
// if(count===target){
//   console.log(i,j);
//   break
// }else if(count>target){

// j--
// }else{
//   i++
// }
// }



// let a=[1,2,3,4,5,6,8,9];

// let j=a.length-1

// let i=0;

// let kk=11

// while(i<j){

//   let ok=a[i]+a[j]

//   if(ok==kk){

//     console.log(i,j);
//     break
//   }else if(ok>kk){
//     j--
//   }else{
//     i++
//   }
// }



// let a=[1,2,2,2,3,3,4,5,6,6,7]

// let b=[]

// for(i=0;i<a.length;i++){
//   if(a[i]==a[i+1]){
//     b.push(a[i])
//   }
// }
// let jk=new Set(b);
// console.log(jk.size);


// let a=15;

// let b=50;

// let c;

// if(a>b){
//   c=a
// }else{
//   c=b
// }

// let i=1

// while (c!=0) {

//   if(i%a==0 && i%b==0){

//     console.log(i);
//     break
    
//   }
//   i++
  
// }                    
// let a=[1,2,3,4,5,6,3,2,1]
// let b=[]
// for(i=1;i<a.length-1;i++){
// if(a[i]>a[i-1]  &&a[i]>a[i+1]){
//  b.push(a[i])
// //  break
// }
// }
// console.log(b);


// let a=[1,2,3,4,5,6]
// b=[]
// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         b[i]=a[i]
//     }
// }
// console.log(b);


 function name(a){
if(a.length%2!==0)  return "unlucky"

let b=a[0]
let c=b[1]
for(i=2;i<a.length;i++)
if(i%2==0&& a[i]!=b)  return "unlucky"

else if( i%2!=0&&a[i]==c) return "unlucy"

return "lucky"
 }
console.log(name("abababa"));
