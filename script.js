for (let i = 0; i < 9; i++) {
  document.querySelector("#game").innerHTML += '<div class="block"></div>';
}

// Variables

let step = 0;
let blockGame = document.querySelector("#game");
let winnerTittle = document.querySelector("h3");
let allBlock = document.getElementsByClassName("block");
let arrBlock = [...allBlock];
let btnNewGame = document.querySelector("button");

// Logic

function clickOnBlock(event) {
  if (event.target.className === "block") {
    if (step % 2 === 0) {
      event.target.innerHTML = "x";
    } else {
      event.target.innerHTML = "o";
    }

    step++;

    checkWinner();
    if (step === 2) step = 0;
  }
}

function startNewGame(event) {
  if (event.target.className == "new-game") {
    arrBlock.forEach(item => (item.textContent = " "));
    winnerTittle.innerHTML = " ";
  }
}

function checkWinner() {
  if (
    (allBlock[0].innerHTML === "x" &&
      allBlock[1].innerHTML === "x" &&
      allBlock[2].innerHTML === "x") ||
    (allBlock[3].innerHTML === "x" &&
      allBlock[4].innerHTML === "x" &&
      allBlock[5].innerHTML === "x") ||
    (allBlock[6].innerHTML === "x" &&
      allBlock[7].innerHTML === "x" &&
      allBlock[8].innerHTML === "x") ||
    (allBlock[0].innerHTML === "x" &&
      allBlock[4].innerHTML === "x" &&
      allBlock[8].innerHTML === "x") ||
    (allBlock[2].innerHTML === "x" &&
      allBlock[4].innerHTML === "x" &&
      allBlock[6].innerHTML === "x") ||
    (allBlock[0].innerHTML === "x" &&
      allBlock[3].innerHTML === "x" &&
      allBlock[6].innerHTML === "x") ||
    (allBlock[1].innerHTML === "x" &&
      allBlock[4].innerHTML === "x" &&
      allBlock[7].innerHTML === "x") ||
    (allBlock[2].innerHTML === "x" &&
      allBlock[5].innerHTML === "x" &&
      allBlock[8].innerHTML === "x")
  ) {
    winnerTittle.innerHTML += "Победили крестики";
  } else if (
    (allBlock[0].innerHTML === "o" &&
      allBlock[1].innerHTML === "o" &&
      allBlock[2].innerHTML === "o") ||
    (allBlock[3].innerHTML === "o" &&
      allBlock[4].innerHTML === "o" &&
      allBlock[5].innerHTML === "o") ||
    (allBlock[6].innerHTML === "o" &&
      allBlock[7].innerHTML === "o" &&
      allBlock[8].innerHTML === "o") ||
    (allBlock[0].innerHTML === "o" &&
      allBlock[4].innerHTML === "o" &&
      allBlock[8].innerHTML === "o") ||
    (allBlock[2].innerHTML === "o" &&
      allBlock[4].innerHTML === "o" &&
      allBlock[6].innerHTML === "o") ||
    (allBlock[0].innerHTML === "o" &&
      allBlock[3].innerHTML === "o" &&
      allBlock[6].innerHTML === "o") ||
    (allBlock[1].innerHTML === "o" &&
      allBlock[4].innerHTML === "o" &&
      allBlock[7].innerHTML === "o") ||
    (allBlock[2].innerHTML === "o" &&
      allBlock[5].innerHTML === "o" &&
      allBlock[8].innerHTML === "o")
  ) {
    winnerTittle.innerHTML += "Победили нолики";
  }
}

blockGame.addEventListener("click", clickOnBlock);

btnNewGame.addEventListener("click", startNewGame);
