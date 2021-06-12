var readlineSync=require('readline-sync');
var userName=readlineSync.question("Enter your Name?");
console.log("Welcome: " +userName);

var userDate=readlineSync.question("Enter your Birth date as DD. ");


 var userMonth=readlineSync.question("Enter your birth month as MM. ");

 var userYear=readlineSync.question("Enter yourr birth years as YYYY. ");

 if((userDate>31) && (userMonth>12))
 {
   console.log("Date and Month not possible!");
 }
 else if((userYear%4===0)&&(userMonth==02))
 {
  if(userDate> 29)
   {
     console.log("Date not possible.");
   }
 }
 else if(userMonth==02){
   if(userDate>28){
     console.log("Incorrect!");
   }
 }
 else{
   check(userDate,userMonth);
 }

function check(date,month)
{
  if((date%2==00)&&(month%2==00)){
    console.log("Not Prime");
  }
  else{
    console.log("Prime birth");
  }
}
