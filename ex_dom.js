//crate elment
var para=document.createElement("p");
var node=document.createTextNode("This is new para...");
para.appendChild(node);
var e=document.getElementById("info");
e.appendChild(para);

var a=document.getElementById("p1");
e.removeChild(a);

var b=document.getElementById("p2");
var new_node=document.createTextNode("this is edited para...");
e.replaceChild(new_node,b);


const but= document.createElement("button");
but.innerHTML="hi";
document.body.appendChild(but);


