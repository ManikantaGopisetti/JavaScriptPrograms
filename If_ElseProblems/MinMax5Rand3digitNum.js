//Reading 5 random 3 digit values
let ranNum1=Math.floor(Math.random()*900+100);
let ranNum2=Math.floor(Math.random()*900+100);
let ranNum3=Math.floor(Math.random()*900+100);
let ranNum4=Math.floor(Math.random()*900+100);
let ranNum5=Math.floor(Math.random()*900+100);

//Finding maximum value
if(ranNum1>ranNum2&&ranNum1>ranNum3&&ranNum1>ranNum4&&ranNum1>ranNum5){
    console.log("Maximum of 5 three digit numbers : "+ranNum1);
}else if(ranNum2>ranNum3&&ranNum2>ranNum4&&ranNum2>ranNum5){
    console.log("Maximum of 5 three digit numbers : "+ranNum2);
}else if(ranNum3>ranNum4&&ranNum3>ranNum5){
    console.log("Maximum of 5 three digit numbers : "+ranNum3);
}else if(ranNum4>ranNum5){
    console.log("Maximum of 5 three digit numbers : "+ranNum4);
}else{
    console.log("Maximum of 5 three digit numbers : "+ranNum5);
}

//Finding minumum value
if(ranNum1<ranNum2&&ranNum1<ranNum3&&ranNum1<ranNum4&&ranNum1<ranNum5){
    console.log("Minimum of 5 three digit numbers : "+ranNum1);
}else if(ranNum2<ranNum3&&ranNum2<ranNum4&&ranNum2<ranNum5){
    console.log("Minimum of 5 three digit numbers : "+ranNum2);
}else if(ranNum3<ranNum4&&ranNum3<ranNum5){
    console.log("Minimum of 5 three digit numbers : "+ranNum3);
}else if(ranNum4<ranNum5){
    console.log("Minimum of 5 three digit numbers : "+ranNum4);
}else{
    console.log("Minimum of 5 three digit numbers : "+ranNum5);
}