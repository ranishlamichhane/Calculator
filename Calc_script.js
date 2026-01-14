const display=document.getElementById("input");
const buttons=document.querySelectorAll("button");
 buttons.forEach(buttons =>
 {
    buttons.addEventListener("click",() =>
    {
        const value=buttons.innerHTML;
        if(value==="AC"){
            display.value="";

        }
        else if(value=== "[X]"){
            display.value=display.value.slice(0,-1);
        }
        else if(value==="%"){
       if(display.value !==""){
        display.value=display.value/100;
       }
         
        }
       else{
        display.value+=value;
       }
    });
 });

 function seeResult(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
display.value="Error";
setTimeout(()=> display.value="",1500);

    }
 }

  
