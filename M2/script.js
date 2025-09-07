//• SELEZIONE
const kmUser = document.getElementById("km");
const ageUser = document.getElementById("age");
const bottoneCalcola = document.getElementById("my-button");

//aggiungo selezione per form
const formBiglietto = document.getElementById("ticket-form");

//• SELEZIONE OUTPUT (dove scrivere i risultati in pagina)
const outputKm      = document.getElementById("outputKm");
const outputEta     = document.getElementById("outputEta");
const outputSconto  = document.getElementById("outputSconto");
const outputPrezzo  = document.getElementById("outputPrezzo");

// • COSTANTE DI LAVORO
// fisso il prezzo per km in una costante (così se domani cambia, tocco 1 sola riga)
const PREZZO_AL_KM = 0.21;

// • EVENTO — M2 usa il SUBMIT del form (non il click del bottone)
formBiglietto.addEventListener('submit', calcolaPrezzo);


//funzione per calcolare il prezzo del biglietto
function calcolaPrezzo(event) {

    // blocco il comportamento di default del form (refresh/invio)
    event.preventDefault();

    const kmInseriti = Number(kmUser.value);

    const etaInserita = Number(ageUser.value);

        //stampo
        console.log("km inseriti:", kmInseriti);
        console.log("età inserita:", etaInserita, "anni");

    // • ELABORAZIONE
    const prezzoBase = kmInseriti * PREZZO_AL_KM; 

    let scontoPercentuale = 0;


    if (etaInserita < 18) {
        scontoPercentuale = 20;
    } else if (etaInserita > 65) {
        scontoPercentuale = 40;
    }

    let prezzoFinale = prezzoBase - (prezzoBase * scontoPercentuale / 100);

  //OUTPUT
  outputKm.textContent     = kmInseriti;                 // mostro i km inseriti
  outputEta.textContent    = etaInserita + " anni";      // mostro l’età
  outputSconto.textContent = scontoPercentuale + "%";    // percentuale sconto
  outputPrezzo.textContent = prezzoFinale.toFixed(2) + "€"; // prezzo formattato a 2 decimali

}