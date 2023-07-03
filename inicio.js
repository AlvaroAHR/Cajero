
document.querySelector("#btnRevSaldo").addEventListener ("Click", total)
document.querySelector("#btnAbono").addEventListener ("Click", sumar)
document.querySelector("#btnRetiro").addEventListener ("Click", retirar)
const saldoAnt = document.querySelector("saldo");
const valor = document.querySelector("introducing");

function sumar(){
    const sldcta = parseInt(document.getElementById("valor").value);
    const vr = parseInt(document.getElementById("movimiento").value);
    const suma = sldcta + vr;

    
    console.log (suma);
    sldcta.innerHTML = suma;

    
}

function restar(){
    const sldcta = parseInt(document.getElementById("valor").value);
    const vr = parseInt(document.getElementById("movimiento").value);
    const suma = sldcta - vr;

    document.querySelector ("sldcta").innerHTML = suma;
    console.log (suma);


    
}




function retirar(){
    saldoAnt =saldoAnt - introducing; 

}

function total(){
    saldoAnt =saldoAnt; 
    saldoAnt.style.display = "visible";

}

