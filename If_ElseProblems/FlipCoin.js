const HEADS=0;

//generating a random number
let coinFlip = Math.floor(Math.random()*10)%2;

//condition to check heads or tails
if(coinFlip==HEADS){
    console.log("Heads");
}else{
    console.log("Tails");
}