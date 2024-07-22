function test(name)
{
    console.log("hello..."+name);
    //document.write("hello..."+name);
    var t="hello "+name;    
    //method 3
    document.getElementById("info").innerHTML=t;
}
   function getname()
   {
     var sname=document.getElementById("t1").value;
     var a="welcome" +sname;
     document.getElementById("info").innerHTML = a;
   }
   
 //main
test("ram");
 document.getElementById("but").addEventListener("click",getname);
 