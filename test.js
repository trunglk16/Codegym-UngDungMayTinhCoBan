function number(num) {
    document.getElementById("display").value = document.getElementById("display").value + num;
}

function operator(operator) {
    document.getElementById("display").value = document.getElementById("display").value + operator;
}

function del() {
    var exp = document.getElementById("display").value;
    document.getElementById("display").value = exp.substring(0,exp.length-1);
}
function bang() {
    var temp = document.getElementById("display").value;
    if(!temp) {
        document.getElementById("display").value = "";

    }else{
        document.getElementById("display").value = eval(temp);
    }
}

function AC() {
    document.getElementById("display").value = "";
}