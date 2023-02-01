let value = 0;

const plus=document.querySelector("#increment").addEventListener("click",()=>{
    value++;
    document.querySelector("#display").innerHTML=value;
});

const minus= document.querySelector("#decrement").addEventListener("click",()=>{
    value--;
    document.querySelector("#display").innerHTML=value;
    
});

const reset=document.querySelector("#reset").addEventListener("click",()=>{
    value=0;
    document.querySelector("#display").innerHTML=value;
});