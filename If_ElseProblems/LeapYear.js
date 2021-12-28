let year=1900;

//checking whether year is divisible by 4
if(year%4==0){
    //checking whether year is divisible by 100
    if(year%100==0){
        //checking whether year is divisible by 400
        if(year%400==0){
            console.log(year+" is leap year");
        }else{
            console.log(year+" is not a leap year");
        }
    }else{
        console.log(year+" is leap year");
    }
}else{
    console.log(year+" is not a leap year");    
}
