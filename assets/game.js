const gameVariables = {
  startButton: document.querySelector("button"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  boardContainer: document.querySelector(".board-container"),
  board: document.querySelector(".board"),
  winingText: document.querySelector(".win")
}

const stats = {
  gameStarted: false,
  totalTime: 0,
  totalFlips: 0,
  flippedCards: 0,
  loop: null
}

const startTheGame = (()=>{
  stats.gameStarted = true;
  gameVariables.startButton.classList.add("disabled");
  
  stats.loop = setInterval(()=>{
    stats.totalTime++;
    gameVariables.timer.innerText =  `time: ${stats.totalTime} sec`;
  }, 1000);
});

gameVariables.startButton.addEventListener("click", ()=>{
  startTheGame();
});
