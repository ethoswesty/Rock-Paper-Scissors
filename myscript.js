function playerSelection() {
    const playerSelection = prompt("Do you chose Rock, Paper or Scissors").toLowerCase();
    return playerSelection
}

function computerSelection(index){
    let computerSelection = Math.random();
        if (computerSelection < 0.37){
            computerSelection = "rock"
        } else if (computerSelection <= 0.67){
            computerSelection = "paper"
        } else {
            computerSelection = "scissors"
        }
        return computerSelection
}
function playRound(playerSelection,computerSelection){
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! rock beats scissors!";
      } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Loser! paper Beats rock";
      } else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a Draw";
      }
      if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
      } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Loser! Scissors Beats Paper";
      } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Draw";
      }

      if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats paper!";
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Loser! Rock Beats Scissors";
      } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Draw";
      } else {
          return "Something went wrong"
      }
}
console.log(playRound(playerSelection(), computerSelection()));