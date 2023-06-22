
export const createHTMLCard = (carta) =>{

    if(!carta) throw new Error('Card value is necessary.')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;

}