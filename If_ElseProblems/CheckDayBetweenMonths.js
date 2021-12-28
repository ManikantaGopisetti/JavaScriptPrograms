let day=19;
let month=6;

//checking if the month is between march and june
if(month>=3&&month<=6){
    //checking to see if day is after march 20 && before june
    if(day>20&&month<6){
        console.log("True");
    }
    //checking to see if day is after march and before june 20
    else if(day<20&&month>3){
        console.log("True");
    }else{
        console.log("False");
    }
}else{
    console.log("False");
}
