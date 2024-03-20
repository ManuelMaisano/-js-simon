//Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
//Da lì parte un timer di 30 secondi.
//Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//creaiamo un array vuoto

const randomNumber = [];

//numeri che compaiono a schermo

const numberOutput = document.querySelector('.number-random');

console.log(numberOutput);


numberOutput.innerHTML = randomNumber;

//variabile numeri random




let numberArray = 5;

while (randomNumber.length < numberArray) {
    let casualNumber = Math.floor((Math.random() * 100) + 1);
    if(!randomNumber.includes(casualNumber)) {
        randomNumber.push(casualNumber)
    }
    casualNumber++
}

numberOutput.innerHTML = randomNumber;


console.log(randomNumber);



//timeoutfunciton


const cancelTheNumbers = setTimeout (function() {
    numberOutput.innerHTML = '';
},10000)

const promptUser = setTimeout (function() {
    let userNumberInTheArray = []
    for (let i = 0; i < numberArray; i++) {
        let userNumber = parseInt(prompt('Scrivi un numero che ricordi'))
        userNumberInTheArray.push(userNumber)
    }
    console.log(userNumberInTheArray);

    let yourScore = 0;
    const correctNumbers = [];
    for (let i = 0; i < userNumberInTheArray.length; i++) {
        let compareNumber = userNumberInTheArray[i]
        if (randomNumber.includes(compareNumber)) {
            correctNumbers.push(compareNumber)
            yourScore++
        }
    }

    const resultUser = document.querySelector('.result')
    console.log(resultUser);

  
},12000)
