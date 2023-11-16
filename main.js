/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Creare la griglia in html
// rifaccio la griglia con js

// creazione bottone 'genera'

const play = document.getElementById('play');
const difficolta = document.getElementById('difficolta');
const griglia = document.querySelector('.griglia');
let numeriCelle;
let numeriCasuali;
// se clicco il bottone play genero la tabella
// se clicco il bottone play scelgo la difficoltà
play.addEventListener('click', function () {
  griglia.innerHTML = '';

  griglia.classList.remove('hidden');
  if (difficolta.value === 'difficolta1') {
    tabella1();
    numeriCasuali = generaNumeriCasuali();
    console.log('difficoltà 1');
    console.log(numeriCasuali);
  } else if (difficolta.value === 'difficolta2') {
    tabella2();
    numeriCasuali = generaNumeriCasuali2();
    console.log('difficoltà 2');
    console.log(numeriCasuali);
  } else if (difficolta.value === 'difficolta3') {
    tabella3();
    console.log('difficoltà 3');
    numeriCasuali = generaNumeriCasuali3();
    console.log(numeriCasuali);
  }
});

function creazioneCelle(tag, classe, contenuto) {
  const cell = document.createElement(tag);
  cell.classList.add(classe);
  cell.append(contenuto);

  return cell;
}

// ho creato tre funzioni diverse da mettere nell'if
function tabella1() {
  for (let i = 1; i <= 100; i++) {
    numeriCelle = creazioneCelle('div', 'casella', i);
    griglia.append(numeriCelle);

    // al click in una cella fai comparire il relativo numero in console
    // aggiungi la classe con il nuovo colore
    numeriCelle.addEventListener('click', function () {
      numeriCelle.classList.add('blue');
      console.log(i);
    });
  }
}

function tabella2() {
  for (let i = 1; i <= 81; i++) {
    numeriCelle = creazioneCelle('div', 'casella2', i);
    griglia.append(numeriCelle);

    // al click in una cella fai comparire il relativo numero in console
    // aggiungi la classe con il nuovo colore
    numeriCelle.addEventListener('click', function () {
      numeriCelle.classList.add('blue');
      console.log(i);
    });
  }
}

function tabella3() {
  for (let i = 1; i <= 49; i++) {
    numeriCelle = creazioneCelle('div', 'casella3', i);
    griglia.append(numeriCelle);

    // al click in una cella fai comparire il relativo numero in console
    // aggiungi la classe con il nuovo colore
    numeriCelle.addEventListener('click', function () {
      numeriCelle.classList.add('blue');
      console.log(i);
    });
  }
}

/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// creo tre diversi generatori di numeri per generare 16 numeri casuali da 0 a 100, da 0 a 81 e da 0 a 49
function generaNumeriCasuali() {
  let numeriGenerati = {};
  let arrayNumeri = [];

  while (arrayNumeri.length < 16) {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;

    if (!numeriGenerati[numeroCasuale]) {
      numeriGenerati[numeroCasuale] = true;
      arrayNumeri.push(numeroCasuale);
    }
  }

  return arrayNumeri;
}

//

function generaNumeriCasuali2() {
  let numeriGenerati = {};
  let arrayNumeri = [];

  while (arrayNumeri.length < 16) {
    let numeroCasuale = Math.floor(Math.random() * 81) + 1;

    if (!numeriGenerati[numeroCasuale]) {
      numeriGenerati[numeroCasuale] = true;
      arrayNumeri.push(numeroCasuale);
    }
  }

  return arrayNumeri;
}

//

function generaNumeriCasuali3() {
  let numeriGenerati = {};
  let arrayNumeri = [];

  while (arrayNumeri.length < 16) {
    let numeroCasuale = Math.floor(Math.random() * 49) + 1;

    if (!numeriGenerati[numeroCasuale]) {
      numeriGenerati[numeroCasuale] = true;
      arrayNumeri.push(numeroCasuale);
    }
  }

  return arrayNumeri;
}
