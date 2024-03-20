//Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
//Da lì parte un timer di 30 secondi.
//Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creaiamo un array vuoto

const randomNumber = [];

//numeri che compaiono a schermo

const numberOutput = document.querySelector('.number-random');

console.log(numberOutput);

//variabile numeri random

let casualNumber = Math.floor((Math.random() * 100) + 1);

console.log(casualNumber);