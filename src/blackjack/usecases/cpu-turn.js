  import { takeCard, cardValue, createHTMLCard } from "./index";
  // Turno CPU
  /**
   * 
   * @param {Number} puntosMinimos 
   * @param {Array} deck
   * @param {puntosHTML}puntosHTML
   */
  export const cpuTurn = ( puntosMinimos, puntosHTML, cartasCpu, deck = [] ) =>{

    if(!puntosMinimos) throw new Error('No record of player points');
    if(!puntosHTML) throw new Error('Necessary argument');

    let cpuPoints = 0;
      
    do{
    const carta = takeCard(deck);

    cpuPoints = cpuPoints + cardValue(carta);
    puntosHTML.innerText = cpuPoints;

    const imgCard = createHTMLCard(carta);  
    cartasCpu.append ( imgCard );

    if(puntosMinimos > 21){
        break;
    }

    } while( (cpuPoints < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout( () => {
        if(cpuPoints === puntosMinimos){
            alert('Tie game!');
        }else if (puntosMinimos > 21){
            alert('Player 1 loose!');
        }else if ( cpuPoints > 21){
            alert('CPU loose!');
        }else{
            alert('CPU wins!');
        }

    }, 100);
}
