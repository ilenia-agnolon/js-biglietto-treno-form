//SELEZIONE
const kmUser = document.getElementById("km");
const ageUser = document.getElementById("age");
const bottoneCalcola = document.getElementById("my-button");

// COSTANTE DI LAVORO
// fisso il prezzo per km in una costante (così se domani cambia, tocco 1 sola riga)
const PREZZO_AL_KM = 0.21;

//ASCOLTO EVENTO CLICK
bottoneCalcola.addEventListener('click', calcolaPrezzo);


//funzione per calcolare il prezzo del biglietto
function calcolaPrezzo () {

    const kmInseriti = parseFloat(kmUser.value);

    const etaInserita = parseInt(ageUser.value);

        //stampo
        console.log("km inseriti:", kmInseriti);
        console.log("età inserita:", etaInserita, "anni");


}