const chosePaper = document.getElementById("chosepaper");
const choseRock = document.getElementById("choserock");
const choseScissor = document.getElementById("chosescissor");
const computerResult = document.getElementById("computerresult");
const userResult = document.getElementById("userresult");
const computerResultImg = document.querySelector("#computerresult > img");
const userResultImg = document.querySelector("#userresult > img");
const showWinner = document.getElementById("showwinner");
const winAgainst = document.getElementById("winagainst");
const showChose = document.getElementById("showchose");
const showResult = document.getElementById("showresult");
const computerScores = document.getElementsByClassName("computer_score")[0];
const userScores = document.getElementsByClassName("your_score")[0];
const playAgain = document.getElementById("playagain");
const instruction = document.getElementById("instruction");
const closeInstruction = document.getElementById("close");
const ruleBtn = document.getElementById("rule");
const nextBtn = document.getElementById("next");
const mainContainer = document.getElementById("main");
const hurrayContainer = document.getElementById("hurray");
const hurrayPlayAgain = document.querySelector("#hurray>button");

const data = [
  {
    name: "rock",
    img: "./icons/rock.png",
  },
  {
    name: "scissor",
    img: "./icons/scissors.png",
  },
  {
    name: "paper",
    img: "./icons/paper.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let currentUserScores = localStorage.getItem("userScore") || 0;
  let currentComputerScore = localStorage.getItem("computerScore") || 0;
  userScores.innerText = currentUserScores;
  computerScores.innerText = currentComputerScore;

  showChose.style.display = "flex";
  showResult.style.display = "none";
  nextBtn.style.display = "none";
  let userChoice = {};
  let computerChoice = {};

  closeInstruction.addEventListener("click", function () {
    instruction.style.display = "none";
  });

  ruleBtn.addEventListener("click", function () {
    if (instruction.style.display === "block") {
      instruction.style.display = "none";
    } else {
      instruction.style.display = "block";
    }
  });
  playAgain.addEventListener("click", function () {
    showChose.style.display = "flex";
    showResult.style.display = "none";
    nextBtn.style.display = "none";
    userChoice = {};
    computerChoice = {};
  });
  hurrayPlayAgain.addEventListener("click", function () {
    showChose.style.display = "flex";
    showResult.style.display = "none";
    nextBtn.style.display = "none";
    hurrayContainer.style.display = "none";
    mainContainer.style.display = "flex";
    userChoice = {};
    computerChoice = {};
  });
  chosePaper.addEventListener("click", function () {
    userChoice = data[2];
    response();
  });
  choseRock.addEventListener("click", function () {
    userChoice = data[0];
    response();
  });
  choseScissor.addEventListener("click", function () {
    userChoice = data[1];
    response();
  });

  nextBtn.addEventListener("click", function () {
    mainContainer.style.display = "none";
    hurrayContainer.style.display = "flex";
    nextBtn.style.display = "none";
  });
  function response() {
    function computerChoiceRandom() {
      let random = Math.floor(Math.random() * 3);
      computerChoice = data[random];
    }
    computerChoiceRandom();

    // Add classes
    function addClass(user, computer, selecteduser, selectedcomputer) {
      if (selecteduser === "paper") {
        user.className = "btn btn_paper result_btn";
      } else if (selecteduser === "scissor") {
        user.className = "btn btn_scissor result_btn";
      } else if (selecteduser === "rock") {
        user.className = "btn btn_rock result_btn";
      }
      if (selectedcomputer === "paper") {
        computer.className = "btn btn_paper result_btn";
      } else if (selectedcomputer === "scissor") {
        computer.className = "btn btn_scissor result_btn";
      } else if (selectedcomputer === "rock") {
        computer.className = "btn btn_rock result_btn";
      }
    }

    function checkWinner() {
      userResultImg.className = "";
      computerResultImg.className = "";
      userResult.className = "";
      computerResult.className = "";
      addClass(
        userResult,
        computerResult,
        userChoice.name,
        computerChoice.name
      );

      if (userChoice.name === computerChoice.name) {
        showWinner.innerText = "TIE UP";
        winAgainst.innerText = "";
        userResultImg.src = userChoice.img;
        if (userChoice.name === "paper") {
          computerResultImg.className = "icon_paper";
          userResultImg.className = "icon_paper";
        }
        computerResultImg.src = computerChoice.img;
        if (computerResult.classList.contains("winner")) {
          computerResult.classList.remove("winner");
        }
        if (userResult.classList.contains("winner")) {
          userResult.classList.remove("winner");
        }
        showChose.style.display = "none";
        showResult.style.display = "flex";
        return;
      } else if (
        userChoice.name === "rock" &&
        computerChoice.name === "scissor"
      ) {
        userScores.innerText = ++currentUserScores;

        // soring user score to local storage
        localStorage.setItem("userScore", currentUserScores);

        nextBtn.style.display = "block";
        showWinner.innerText = "YOU WIN";
        winAgainst.innerText = "AGAINST PC";
        userResultImg.src = userChoice.img;
        computerResultImg.src = computerChoice.img;
        if (userChoice.name === "paper") {
          userResultImg.className = "icon_paper";
        }
        if (computerChoice.name === "paper") {
          computerResultImg.className = "icon_paper";
        }
        showChose.style.display = "none";
        showResult.style.display = "flex";
        if (computerResult.classList.contains("winner")) {
          computerResult.classList.remove("winner");
        }
        userResult.classList.add("winner");
        return;
      } else if (
        userChoice.name === "paper" &&
        computerChoice.name === "scissor"
      ) {
        userScores.innerText = ++currentUserScores;

        // soring user score to local storage
        localStorage.setItem("userScore", currentUserScores);

        nextBtn.style.display = "block";
        showWinner.innerText = "YOU WIN";
        winAgainst.innerText = "AGAINST PC";
        userResultImg.src = userChoice.img;
        computerResultImg.src = computerChoice.img;
        if (userChoice.name === "paper") {
          userResultImg.className = "icon_paper";
        }
        if (computerChoice.name === "paper") {
          computerResultImg.className = "icon_paper";
        }
        showChose.style.display = "none";
        showResult.style.display = "flex";
        if (computerResult.classList.contains("winner")) {
          computerResult.classList.remove("winner");
        }
        userResult.classList.add("winner");
        return;
      } else if (
        userChoice.name === "scissor" &&
        computerChoice.name === "paper"
      ) {
        userScores.innerText = ++currentUserScores;

        // soring user score to local storage
        localStorage.setItem("userScore", currentUserScores);

        nextBtn.style.display = "block";
        showWinner.innerText = "YOU WIN";
        winAgainst.innerText = "AGAINST PC";
        userResultImg.src = userChoice.img;
        computerResultImg.src = computerChoice.img;
        showChose.style.display = "none";
        showResult.style.display = "flex";
        if (userChoice.name === "paper") {
          userResultImg.className = "icon_paper";
        }
        if (computerChoice.name === "paper") {
          computerResultImg.className = "icon_paper";
        }
        if (computerResult.classList.contains("winner")) {
          computerResult.classList.remove("winner");
        }
        userResult.classList.add("winner");
        return;
      } else {
        computerScores.innerText = ++currentComputerScore;

        // soring computer score to local storage
        localStorage.setItem("computerScore", currentComputerScore);

        showWinner.innerText = "YOU LOST";
        winAgainst.innerText = "AGAINST PC";
        userResultImg.src = userChoice.img;
        computerResultImg.src = computerChoice.img;
        showChose.style.display = "none";
        showResult.style.display = "flex";
        if (userChoice.name === "paper") {
          userResultImg.className = "icon_paper";
        }
        if (computerChoice.name === "paper") {
          computerResultImg.className = "icon_paper";
        }
        if (userResult.classList.contains("winner")) {
          userResult.classList.remove("winner");
        }
        computerResult.classList.add("winner");
        return;
      }
    }

    checkWinner();
  }
});
