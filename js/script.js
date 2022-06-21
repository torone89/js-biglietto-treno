
// VERIFICA JS COLLEGATO

console.log('JS OK');

/* 

1 Creare una variabile per contenere Età del passeggero e chiedere all'utente età 
2 Creare una variabile per contenere kilometri e chiedere all'utente il numero dei kilometri che vuole percorrere 
3 Calcolo il totale del viaggio senza sconto
4 Stampo il totale del viaggio senza sconto e inserisco html
5 

*/

// FASE 1 e 2

const età = prompt("Quanti anni hai?", "10");
console.log(età);

const kilometri = prompt("Quanti kilometri vuoi percorrere", "20");
console.log(kilometri);

// FASE 2 
const totaleViaggio = kilometri * 0.21
console.log(totaleViaggio)


// FASE 3 

// const stileCosto = `<p>La tua spesa totale è di  <strong>${totaleViaggio}&euro;<strong><p>`
// console.log(stileCosto);

// const paragrafoTotale = document.getElementById('costoDelViaggio')
// costoDelViaggio.innerHTML = stileCosto
// console.log(paragrafoTotale)


const Saldo = `<p>La tua spesa totale è di <strong>${totaleViaggio} Euro<strong<p>`

const Conto = document.getElementById('contoTotale')
contoTotale.innerHTML = Saldo
console.log(Saldo);