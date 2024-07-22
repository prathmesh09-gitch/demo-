const calculation=(a,b,operation)=>{return operation(a,b);}

var addition =(a,b)=>a+b;
var result =calculation(20,10,addition);    //line no 1
document.write("addtion is "+result);

var substraction =(a,b)=>a-b;
var subresult =calculation(20,10,substraction);    //line no 2
document.write("<br> substraction is "+subresult);

var multiplication =(a,b)=>a*b;
var multiresult =calculation(20,10,multiplication);    //line no 3
document.write("<br>multiplication  is "+multiresult);

var dividation=(a,b)=>a-b;
var divresult =calculation(20,10,dividation);    //line no 2
document.write("<br>dividation is "+divresult);