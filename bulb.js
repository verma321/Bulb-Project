document.querySelector("#btn").addEventListener("click",ONOFF);

function ONOFF(){
let e= document.querySelector("#btn").innerHTML;
if(e=='Turn On'){
    document.querySelector("#btn").innerHTML="Turn Off";
    document.querySelector("#on_off").setAttribute("src","ON.jpg");
}
else{
    document.querySelector("#btn").innerHTML="Turn On";
    document.querySelector("#on_off").setAttribute("src","OFF.jpg")   
}
}