import { cardValue, cpuTurn, createDeck, createHTMLCard, takeCard } from "./usecases";

(() => {
  'use strict'

  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'];
  const especiales = ['A', 'K', 'Q', 'J'];
  let playerPoints = 0, cpuPoints = 0;

  //Referencias de HTML:
  const btnNuevo = document.querySelector('#btnNuevo');
  const btnDetener = document.querySelector('#btnDetener');
  const btnPedir = document.querySelector('#btnPedir');

  const cartasJugador = document.querySelector('#player-cartas');
  const cartasCpu = document.querySelector('#CPU-cartas');

  const puntosHTML = document.querySelectorAll('small');


deck = createDeck( tipos, especiales );

 
deck = takeCard(deck);

  //eventos

  btnPedir.addEventListener('click', () => {

      const carta = takeCard(deck);

      playerPoints = playerPoints + cardValue( carta );
      puntosHTML[0].innerText = playerPoints;

      const imgCarta = createHTMLCard(carta);
      cartasJugador.append ( imgCarta );

      if (playerPoints > 21){
          console.warn('Perdiste, intenta de nuevo.')
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          cpuTurn(playerPoints, puntosHTML[1], cartasCpu, deck);
      }
      else if(playerPoints === 21){
          console.warn('Felicidades, ganaste!')
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          cpuTurn(playerPoints, puntosHTML[1], cartasCpu, deck);
      }
  });

  btnDetener.addEventListener('click', () => {
      
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      cpuTurn(playerPoints, puntosHTML[1], cartasCpu, deck);
  });

  btnNuevo.addEventListener('click', () => {

      console.clear();
      deck = []
      deck = createDeck( tipos, especiales );;

      playerPoints = 0;
      cpuPoints = 0;

      puntosHTML[0].innerText = 0;
      puntosHTML[1].innerText = 0;

      cartasJugador.innerHTML = '';
      cartasCpu.innerHTML = '';

      btnPedir.disabled = false;
      btnDetener.disabled = false;


  });

})();