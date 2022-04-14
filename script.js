function calc(x){
    document.getElementById('inp').value += x;
}

function cross(){
    document.getElementById('inp').value = null;
}

function equalCalc(){
    let response = document.getElementById('inp').value;
    var answer = eval(response)
    document.getElementById('inp').value = answer
}


