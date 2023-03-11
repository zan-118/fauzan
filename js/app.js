class Game {
  constructor() {
    this.playerChoice = "";
    this.computerChoice = "";
    this.result = "";
    this.choices = ["rock", "paper", "scissors"];
    this.resultText = document.getElementById("result");
    this.playerChoicesText = document.getElementById("playerChoices");
    this.computerChoicesText = document.getElementById("computerChoices");
    this.resetButton = document.getElementById("reset");
    this.resetButton.addEventListener("click", () => this.reset());
    this.choiceButtons = document.querySelectorAll(".choice");
    this.choiceButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.playerChoice = button.dataset.value;
        this.play();
      });
    });
  }

  play() {
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    console.log("Player 1:" + this.playerChoice);
    console.log("COM:" + this.computerChoice);
    if (this.playerChoice === this.computerChoice) {
      this.result = "DRAW";
      this.resultText.style.padding = "30px";
      this.resultText.style.borderRadius = "10px";
      this.resultText.style.fontSize = "38px";
      this.resultText.style.color = "white";
      this.resultText.style.backgroundColor = "#035B0C";
    } else if (
      (this.playerChoice === "rock" && this.computerChoice === "scissors") ||
      (this.playerChoice === "paper" && this.computerChoice === "rock") ||
      (this.playerChoice === "scissors" && this.computerChoice === "paper")
    ) {
      this.result = "PLAYER 1 WIN";
      this.resultText.style.padding = "30px";
      this.resultText.style.borderRadius = "10px";
      this.resultText.style.fontSize = "38px";
      this.resultText.style.color = "white";
      this.resultText.style.backgroundColor = "#4C9654";
    } else {
      this.result = "COM WIN";
      this.resultText.style.padding = "30px";
      this.resultText.style.borderRadius = "10px";
      this.resultText.style.fontSize = "38px";
      this.resultText.style.color = "white";
      this.resultText.style.backgroundColor = "#4C9654";
    }
    this.resultText.innerText = this.result;
    this.playerChoicesText.innerText = "Player 1: " + this.playerChoice;
    this.computerChoicesText.innerText = "COM: " + this.computerChoice;

    console.log("result:" + this.result);
  }

  reset() {
    this.playerChoice = "";
    this.computerChoice = "";
    this.result = "";
    this.playerChoicesText.innerText = "PLAYER 1";
    this.computerChoicesText.innerText = "COM";
    this.resultText.innerText = "VS";
    this.resultText.style = "#result";
  }
}

const game = new Game();
