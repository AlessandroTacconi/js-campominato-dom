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

// se clicco il bottone play genero la tabella
// se clicco il bottone play scelgo la difficoltà
play.addEventListener('click', function () {
  griglia.innerHTML = '';

  griglia.classList.remove('hidden');
  if (difficolta.value === 'difficolta1') {
    tabella1();
    console.log('difficoltà 1');
  } else if (difficolta.value === 'difficolta2') {
    tabella2();
    console.log('difficoltà 2');
  } else if (difficolta.value === 'difficolta3') {
    tabella3();
    console.log('difficoltà 3');
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
    const numeriCelle = creazioneCelle('div', 'casella', i);
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
    const numeriCelle = creazioneCelle('div', 'casella2', i);
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
    const numeriCelle = creazioneCelle('div', 'casella3', i);
    griglia.append(numeriCelle);

    // al click in una cella fai comparire il relativo numero in console
    // aggiungi la classe con il nuovo colore
    numeriCelle.addEventListener('click', function () {
      numeriCelle.classList.add('blue');
      console.log(i);
    });
  }
}
