function clk(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
    document.getElementById("screen").value= document.getElementById("screen").value
    
}

function clrdisp(){
    document.getElementById("screen").value=""
}

function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result
}
function multiply() {
    result = parseFloat(currentInput);
    currentInput = 'X';
}