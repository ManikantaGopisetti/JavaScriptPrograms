let day=31;
let month=5;

//checking if the month is between march and june
if(month>=3 && month<=6){
    //check the days in particular month
    if(day>0 && day<=30+(month%2)){
        //checking to see if day is after march 20 && before june
        if(day>20&&month<6){
            console.log("True");
        }
    //checking to see if day is after march and before june 20
        else if(day<20 && month>3){
         console.log("True");
        }else{
          console.log("False");
        }
    }else{
        console.log("Enter a valid day");
    }
}else{
    console.log("False");
}
