window.onload=function(){

const displayEl=document.getElementById("display");
const startEl= document.getElementById("startbtn");
const stopEl= document.getElementById("stopbtn");
const resetEl= document.getElementById("resetbtn");
const secondEl= document.getElementById("sec");
const microEl= document.getElementById("micro");
var seconds=00;
var micro=00;
var interval;

startEl.onclick = function(){
    clearInterval(interval);
    interval=setInterval(startTimer,10)
}

stopEl.onclick= function(){
        clearInterval(interval)

}
resetEl.onclick=function(){
    clearInterval(interval);
    seconds="00";
    micro="00";
    secondEl.innerHTML= seconds;  
    microEl.innerHTML= micro; 
}
function startTimer(){
    micro++;
    if(micro <=9){
        microEl.innerHTML= "0" + micro;
    }
    if(micro >9){
        microEl.innerHTML=micro;
    }
    if(micro >99)
    {
        seconds++;
        micro=0;
        secondEl.innerHTML= "0"  + 0;
        secondEl.innerHTML="0" + seconds;
    }
    if(seconds>9){
        secondEl.innerHTML=seconds;
    }
}}


