const display = document.getElementById("input");
function appendtoDisplay(input) {
    display.value += input;
}


function clearDipslay() {
    display.value = "";
}
function seeResult() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
}
function calculatePercentage() {
    display.value = display.value / 100;
}