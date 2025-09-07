//• SELEZIONE
const kmUser = document.getElementById("km");
const ageUser = document.getElementById("age");
const bottoneCalcola = document.getElementById("my-button");

// COSTANTE DI LAVORO
// fisso il prezzo per km in una costante (così se domani cambia, tocco 1 sola riga)
const PREZZO_AL_KM = 0.21;

// • ASCOLTO EVENTO CLICK
bottoneCalcola.addEventListener('click', calcolaPrezzo);


//funzione per calcolare il prezzo del biglietto
function calcolaPrezzo () {

    const kmInseriti = parseFloat(kmUser.value);

    const etaInserita = parseInt(ageUser.value);

        //stampo
        console.log("km inseriti:", kmInseriti);
        console.log("età inserita:", etaInserita, "anni");

    // • ELABORAZIONE
     let scontoPercentuale = 0;

    if (etaInserita < 18) {
        scontoPercentuale = 20;
    } else if (etaInserita > 65) {
        scontoPercentuale = 40;
    }

    let prezzoFinale = prezzoBase - (prezzoBase * scontoPercentuale / 100);

  //OUTPUT
  console.log("prezzo base:", prezzoBase.toFixed(2) + "€");
  console.log("sconto applicato:", scontoPercentuale + "%");
  console.log("prezzo finale:", prezzoFinale.toFixed(2) + "€");

}