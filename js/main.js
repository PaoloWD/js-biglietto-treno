const km = prompt("Inserisci il numero di km che vuoi percorrere");
const age = prompt("inserisci la tua età e non imbrogliare per favore");
const ticketPrice = (km * 0.21).toFixed(2);

if (age < 18) {
  let ticketPriceSale = (ticketPrice * 0.8).toFixed(2);
  console.log(ticketPriceSale);
} else if (age >= 18 && age <= 65) {
  console.log(ticketPrice);
} else {
  let ticketPriceSale = (ticketPrice * 0.6).toFixed(2);
  console.log(ticketPriceSale);
}
