//Dichiarazione costanti
const deadline = new Date('2025-09-30'); 
const countdown = document.getElementById('countdown');
const date = new Date();
const dateDiff = deadline - date;

const daysLeft = Math.ceil(dateDiff / (1000 * 60 * 60 * 24)); 
// Calcola il numero di giorni interi rimanenti a partire da una differenza di tempo in millisecondi (dateDiff),
// dividendo per il numero di millisecondi in un giorno (1000 ms * 60 s * 60 min * 24 h),
// e arrotonda per eccesso con Math.ceil() per includere il giorno corrente se c'è tempo residuo.

//Funzione per calcolo 
function updateCountdown() { 
    if( daysLeft > 0 ){
        countdown.textContent = `${daysLeft} days left`;
    }else{
        countdown.textContent = "We are ready!";
    }
}

updateCountdown(); //serve a eseguire il codice che è stato definito all’interno della funzione