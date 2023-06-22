
/**
 * 
 * @param {Array} deck 
 * @returns {string}
 */

export const takeCard = (deck) => {
    if (!deck || deck.length === 0 ){
        throw 'El deck esta vacio.';
    } 
    const  carta = deck.pop();
    return carta;
}