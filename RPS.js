let score = JSON.parse(localStorage.getItem('score')) || {
  Wins:0,
  Loss:0,
  Tie:0
};

updateScoreElement();


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
      score.Loss +=1;
    } else if (computerMove === 'paper') {
      result = 'You win.';
      score.Wins +=1;
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
      score.Tie+=1;
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
      score.Wins +=1;
    } else if (computerMove === 'paper') {
      result = 'Tie.';
      score.Tie+=1;
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
      score.Loss +=1;
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
      score.Tie+=1;
    } else if (computerMove === 'paper') {
      result = 'You lose.';
      score.Loss +=1;
    } else if (computerMove === 'scissors') {
      result = 'You win.';
      score.Wins +=1;
    }
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result')
    .innerHTML= result;

  document.querySelector('.js-moves')
    .innerHTML= `You 
    <img class = "move" src="images/${playerMove}-emoji.png">
    <img class = "move" src="images/${computerMove}-emoji.png">
    Computer.`;

  updateScoreElement();

   
}

function updateScoreElement(){

  

  document.querySelector('.js-score')
    .innerHTML=  `Win: ${score.Wins}, Loss: ${score.Loss}, Tie: ${score.Tie}`;

}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}