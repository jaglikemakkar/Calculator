function btnpress(val){
    if (val==='C'){
        document.getElementById("display").value = '';
    }
    else if (val === '='){
        try{
            var result = eval(document.getElementById("display").value);
            document.getElementById("display").value = result;
        }
        catch(error){
            document.getElementById("display").value = "Error";
        }
    }
    else{
        document.getElementById("display").value += val;
    }
}

function keypress(){
    if (event.keyCode == 13){
        btnpress('=');
    }
}