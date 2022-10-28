const km = prompt("Inserisci il numero di km che vuoi percorrere");
const age = prompt("inserisci la tua età e non imbrogliare per favore");
//validiamo i dati inseriti
if (isNaN(km)) {
  alert("I km non sono validi");
}
if (isNaN(age)) {
  alert("L'età inserita non è valida");
}
const ticketPrice = (km * 0.21).toFixed(2);
let ticketPriceSale;

if (age < 18) {
  ticketPriceSale = (ticketPrice * 0.8).toFixed(2);
  const prezzo = document.getElementById("prezzo");
  prezzo.innerHTML = ` ${ticketPriceSale} . Hai usufruito di uno sconto del 20%!`;
} else if (age >= 18 && age <= 65) {
  ticketPriceSale = ticketPrice;
  const prezzo = document.getElementById("prezzo");
  prezzo.innerHTML = ` ${ticketPriceSale} . Non hai diritto ad uno sconto`;
} else {
  ticketPriceSale = (ticketPrice * 0.6).toFixed(2);
  const prezzo = document.getElementById("prezzo");
  prezzo.innerHTML = ` ${ticketPriceSale} . Hai usufruito di uno sconto del 40%!`;
}

const km_utente = document.getElementById("km_utente");
km_utente.innerHTML = km;
