const display = document.getElementById("input");
function appendtoDisplay(input) {
    display.value += input;
}


function clearDipslay() {
    display.value = "";
}
function seeResult(){
    display.value=eval(display.value);
}

function deleteOne(){
    display.value=display.value.slice(0 ,-1);
}
function calculatePercentage(){
    display.value=display.value/100;
}