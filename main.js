const numeriCasuali = randomArray();

const divContenitore = document.getElementById("container");

divContenitore.append(numeriCasuali);

tempoDeiNumeri();

//creo una funzione per generare dei numeri random
function numberRandom() {
    return Math.floor(Math.random() * 100) + 1;
}
 
//creo una funzione per fare in modo che i numeri sopra generati facciamo parte di una array
 function randomArray() {
     let array = [];
 
     while (array.length <= 4) {
         let rn = numberRandom();
         if (!array.includes(rn)){
              array.push(rn);
         }
     }
     return array;
}

//creo una funzione per creare il "timer" di 30 sec, tempo nel quale si vedranno i 5 numeri random prima generati
function tempoDeiNumeri() {
    setTimeout(function() {
        divContenitore.innerHTML = ""; 
        }, 10000);
    setTimeout(risoluzioneGioco ,10500);
} //chiedere una soluzione migliore per riga 25/29 perchè il prompt altrimenti parte prima che il browser riesca a scrivermi l'html

//creo una funzione in cui inserisco i risultati alle domande nel ciclo for
function risoluzioneGioco() {
    let punteggio = 0;
    let azzeccati = [];
//nel ciclo for chiedo, una volta per ogni numero, di inserire un numero che si ricorda
    for (let index = 0; index < 5 ; index++) {
        let numeroInserito = parseInt(prompt("Inserisci uno dei 5 numeri che ricordi di aver visto"));
        if (numeriCasuali.includes(numeroInserito)){
            punteggio++
            azzeccati.push(numeroInserito);
        }
    }

    alert("Hai indovinato " + punteggio + " numeri: " + azzeccati);
}



