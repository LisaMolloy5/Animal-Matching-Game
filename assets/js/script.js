let cards = document.querySelectorAll('.card')

let cardFlipped = false;
let firstCard, secondCard;

function flipCards() {
    this.classList.toggle('flip')

    if (!cardFlipped) {
        // First card clicked 
        cardFlipped = true;
        firstCard = this;
    } else {
        // Second card clicked
        cardFlipped = false;
        secondCard = this;

        // check for match

        if (firstCard.dataset.name ===
            secondCard.dataset.name) {

            firstCard.removeEventListener('click', flipCards)
            firstCard.removeEventListener('click', flipCards)
        } else {
            setTimeout(() => {
             firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')   
            }, 1000)
            
        }
    }
}

function unflipCard() {

}

function checkMatch() {

}

function shuffle() {

}


cards.forEach(card => card.addEventListener('click', flipCards))