function hello(){
document.getElementById("out").innerHTML=
"Welcome 👋 Start learning JavaScript!";
}

function variables(){
let name="Student";
const course="JavaScript";
document.getElementById("out").innerHTML=
name+" is learning "+course;
}

function datatypes(){
let text="JS";
let num=10;
let bool=true;
document.getElementById("out").innerHTML=
typeof text+" , "+typeof num+" , "+typeof bool;
}

function operators(){
let a=10,b=5;
document.getElementById("out").innerHTML=
"Sum="+(a+b)+" Multiply="+(a*b);
}

function arrays(){
let arr=["HTML","CSS"];
arr.push("JS");
arr.pop();
document.getElementById("out").innerHTML=arr.join(" , ");
}

function condition(){
let marks=80;
let msg="";
if(marks>=90){msg="A Grade";}
else if(marks>=60){msg="B Grade";}
else{msg="C Grade";}
document.getElementById("out").innerHTML=msg;
}

function switchExample(){
let day=3;
let text="";
switch(day){
case 1:text="Monday";break;
case 2:text="Tuesday";break;
case 3:text="Wednesday";break;
default:text="Other Day";
}
document.getElementById("out").innerHTML=text;
}
function welcome(){
document.getElementById("out").innerHTML=
"Welcome 👋 Start learning JavaScript!";
}

function runLoop(){
let text="";
for(let i=1;i<=5;i++){
text+=i+" ";
}
document.getElementById("out").innerHTML=text;
}

function runString(){
let txt="JavaScript";
document.getElementById("out").innerHTML=
txt.toUpperCase()+" | Length = "+txt.length;
}

function runFunction(){
document.getElementById("out").innerHTML=
"Sum = "+add(5,3);
}
function add(a,b){
return a+b;
}

function runMethod(){
let arr=["HTML","CSS"];
arr.push("JS");
document.getElementById("out").innerHTML=
arr.join(" , ");
}