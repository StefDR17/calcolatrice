let num1;
let num2;

function add(){
    let num1 = document.getElementById("primo_numero").value;
    let num2 = document.getElementById("secondo_numero").value;

    let somma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("risultato").innerHTML="Risultato: " + somma;
}

function sott(){
    let num1 = document.getElementById("primo_numero").value;
    let num2 = document.getElementById("secondo_numero").value;

    let sottrazione = parseFloat(num1) - parseFloat(num2);
    document.getElementById("risultato").innerHTML="Risultato: " + sottrazione;
}

function molt(){
    let num1 = document.getElementById("primo_numero").value;
    let num2 = document.getElementById("secondo_numero").value;

    let moltiplicazione = parseFloat(num1) * parseFloat(num2);
    document.getElementById("risultato").innerHTML="Risultato: " + moltiplicazione;
}

function div(){
    let num1 = document.getElementById("primo_numero").value;
    let num2 = document.getElementById("secondo_numero").value;

    let divisione = parseFloat(num1) / parseFloat(num2);
    document.getElementById("risultato").innerHTML="Risultato: " + divisione;
}