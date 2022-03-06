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
    }
}

function unflipCard() {

}

function checkMatch() {

}

function shuffle() {

}

cards.forEach(card => card.addEventListener('click', flipCards))