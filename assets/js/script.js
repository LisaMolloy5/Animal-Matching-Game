let cards = document.querySelectorAll('.card')


function flipCards() {

    this.classList.toggle('flip')

    

}

cards.forEach(card => card.addEventListener('click', flipCards))

function checkMatch() {

}

function unflipCard() {

}

function shuffle() {

}