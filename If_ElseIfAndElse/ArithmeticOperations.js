let a=4;
let b=20;
let c=5;

let fun1=a+b*c;
let fun2=a%b+c;
let fun3=c+a/b;
let fun4=a*b+c;

//finding maximum
if(fun1>fun2&&fun1>fun3&&fun1>fun4){
    console.log("fun1 :"+fun1+" is maximum");
}else if(fun2>fun3&&fun2>fun4){
    console.log("fun2 : "+fun2+" is maximum")
}else if(fun3>fun4){
    console.log("fun3 : "+fun3+" is maximum")
}else{
    console.log("fun4: "+fun4+" is maximum")
}

//finding minimum
if(fun1<fun2&&fun1<fun3&&fun1<fun4){
    console.log("fun1 :"+fun1+" is minimum");
}else if(fun2<fun3&&fun2<fun4){
    console.log("fun2 : "+fun2+" is minimum")
}else if(fun3<fun4){
    console.log("fun3 : "+fun3+" is minimum")
}else{
    console.log("fun4"+fun4+" is minimum")
}