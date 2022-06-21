
// VERIFICA JS COLLEGATO

console.log('JS OK');

/* 

1 Creare una variabile per contenere Età del passeggero e chiedere all'utente età 
2 Creare una variabile per contenere kilometri e chiedere all'utente il numero dei kilometri che vuole percorrere 
3 Calcolo il totale del viaggio senza sconto
4 Stampo il totale del viaggio senza sconto e inserisco html
5 Calcolo Sconti del 20 % e del 60%
6 Quando devo applicare lo sconto?
7 Stampo gli sconti sul doc e inserisco un nuovo div

*/

// FASE 1 e 2

const età = parseInt(prompt("Quanti anni hai?", "10"));
console.log(età);

const kilometri = parseInt(prompt("Quanti kilometri vuoi percorrere", "20"));
console.log(kilometri);

// FASE 3
const totaleViaggio = kilometri * 0.21
console.log(totaleViaggio)


// FASE 4




const Saldo = `<p>La tua spesa totale è di <strong>${totaleViaggio} Euro<strong<p>`

const Conto = document.getElementById('contoTotale')
contoTotale.innerHTML = Saldo
console.log(Saldo);


// FASE 5

const saldoMinori = totaleViaggio - (totaleViaggio * 0.2)
console.log(saldoMinori)

const saldoAnziani = totaleViaggio - (totaleViaggio * 0.4)
console.log(saldoAnziani)

// Fase 6

let sconto;

if (età < 18) { sconto = saldoMinori + " Euro" + " Hai diritto a uno sconto del 20% percento perchè sei minorenne" }

else if (età > 65) {
    sconto = saldoAnziani + " Euro" + " Hai diritto a uno sconto del 40% percento perchè sei un over65 Anni"

}
else {
    sconto = Saldo + " Euro" + " Non puoi beneiciare di nessun sconto"

}

console.log(sconto)

// Fase 7


const SaldoSconto = `<p><strong>La tua spesa totale è di:</strong> ${sconto}<p>`

const Prova = document.getElementById('contoScontato')
contoScontato.innerHTML = SaldoSconto
console.log(SaldoSconto);
