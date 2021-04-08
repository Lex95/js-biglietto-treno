var kilometers = parseInt(prompt("Inserire numero chilometri da percorrere:"));
var age = parseInt(prompt("Inserire l'età del passeggero:"));

var fee = (kilometers * 0.21);

if (Number.isNaN(kilometers) || Number.isNaN(age)) {
    alert("Dati inseriti non validi!");
}
else if (age < 18) {
    var cost = (fee * 0.8).toFixed(2);
}
else if (age >= 65) {
    var cost = (fee * 0.6).toFixed(2);
}
else {
    var cost = fee.toFixed(2)
}

document.getElementById("myId").innerHTML= cost + " €";