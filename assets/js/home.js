const howBtn = document.getElementById('how-btn')
const gameIns = document.getElementById('instructions')
const closeBtn = document.getElementById('close')


howBtn.addEventListener('click', howToPlay)
closeBtn.addEventListener('click', closeIns)

function howToPlay() {
  gameIns.classList.remove('hide')
}

function closeIns() {
    gameIns.classList.add('hide')
}


