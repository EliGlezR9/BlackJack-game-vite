import _ from 'underscore';

/**
 * 
 * @param {array} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */

export const createDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('TiposDeCarta es obligatorio')

    let deck = [];

    for(let i = 2; i <= 10; i++) {
        for(let tipo of tiposDeCarta)  {
            deck.push( i + tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }
    
    deck = _.shuffle( deck ); 
    return deck;
}