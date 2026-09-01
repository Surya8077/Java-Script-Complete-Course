let userinput = prompt("Hey enter your age")
console.log(userinput);

//In this case our output is come in 18 is Adult
if(Number(userinput) == 18){
    console.log("Adult");
}else{
    console.log("Kid");
}

//In this case our output is come in 18 is Kid
if(userinput>18){
    console.log("Adult")
}else{
    console.log("Kid")
}