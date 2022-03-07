const howBtn = document.getElementById('how-btn')
const gameIns = document.getElementById('instructions')
const closeBtn = document.getElementById('close')

let matchesRef2 = document.getElementById('matches2');
let matches2 = 0;

howBtn.addEventListener('click', howToPlay)
closeBtn.addEventListener('click', closeIns)

function howToPlay() {
  gameIns.classList.remove('hide')
}

function closeIns() {
    gameIns.classList.add('hide')
}


function checkMatch() {
  if (firstCard.dataset.name ===
      secondCard.dataset.name) {

      firstCard.removeEventListener('click', flipCards)
      secondCard.removeEventListener('click', flipCards)

      // To update the number of matches by 1 for each pair.
      matches2++;
      matchesRef2.innerText = matches2;


  } else {
      unflipCards();
  }

  // To alert the player they have won.

  if (Number(matchesRef2.innerText) === 4) {
      setTimeout(() => {
          alert('CONGRATULATIONS YOU WON!!! CLICK RESTART TO PLAY AGAIN')
      }, 500);
  }
}
