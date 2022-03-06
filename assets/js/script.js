let cards = document.querySelectorAll('.card');
let matchesRef = document.getElementById('matches');
let matches = 0;

let cardFlipped = false;
let lockGame = false;
let firstCard, secondCard;

function flipCards() {
    if (lockGame) return;

    this.classList.toggle('flip')

    if (!cardFlipped) {
        // First card clicked 
        cardFlipped = true;
        firstCard = this;
    } else {
        // Second card clicked
        cardFlipped = false;
        secondCard = this;

        checkMatch()
    }
}


function checkMatch() {
    if (firstCard.dataset.name ===
        secondCard.dataset.name) {

        firstCard.removeEventListener('click', flipCards)
        secondCard.removeEventListener('click', flipCards)

        // To update the number of matches by 1 for each pair.
        matches++;
        matchesRef.innerText = matches;


    } else {
        unflipCards();
    }

    // To alert the player they have won.
    if (Number(matchesRef.innerText) === 8) {
        if (Number(matchesRef.innerText) === 8) {
            setTimeout(() => {
                alert('You Won!!')
            }, 500);
        }
    }
}

function unflipCards() {
    lockGame = true;

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockGame = false;
    }, 1000);
}

function shuffle() {

}


cards.forEach(card => card.addEventListener('click', flipCards))