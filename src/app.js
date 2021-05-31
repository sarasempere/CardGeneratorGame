import "bootstrap";
import "./style.css";

import "./assets/img/corazon.png";
import "./assets/img/picas.png";
import "./assets/img/rombo_diamante.png";
import "./assets/img/trebol.png";
import "./assets/img/tapete.jpg";

window.onload = function() {
  number();
  bastos();
  bastosSecondCard();
  numberSecondCard();
};

let win1 = 0;
let win2 = 0;

function winner() {
  let wins1 = document.querySelector(".numb").firstChild;
  //console.log(wins1.nodeValue);
  let wins2 = document.querySelector(".numb2").firstChild;
  //console.log(wins2.nodeValue);
  if (wins1.nodeValue > wins2.nodeValue) {
    win1++;
  } else if (wins2.nodeValue > wins1.nodeValue) {
    win2++;
  }

  let winsPlayer1 = document.querySelector(".wins1");
  winsPlayer1.innerHTML = "Win: " + win1;
  let winsPlayer2 = document.querySelector(".wins2");
  winsPlayer2.innerHTML = "Win: " + win2;
}

let player1 = 0;
window.reload = function reload() {
  player1++;
  number();
  bastos();
  winner();
  let player1points = document.querySelector(".points1");
  player1points.innerHTML = "Total games: " + player1;
};

let player2 = 0;
window.reload2 = function reload2() {
  player2++;
  numberSecondCard();
  bastosSecondCard();
  winner();
  let player2points = document.querySelector(".points2");
  player2points.innerHTML = "Total games: " + player2;
};

let randomSuit = () => {
  return Math.floor(Math.random() * 4);
};

let randomNum = () => {
  return Math.floor(Math.random() * 9) + 1;
};

let bastos = () => {
  let basto = "";
  switch (randomSuit()) {
    case 0:
      basto = "spade";
      break;
    case 1:
      basto = "heart";
      break;
    case 2:
      basto = "diamond";
      break;
    case 3:
      basto = "club";
      break;
  }
  let bas = document.querySelectorAll(".bastos");
  function drawBastos(bas) {
    for (let i = 0; i < bas.length; i++) {
      //activeDiv.classList.replace('active', 'warning');Usar para emezar desde 0.
      //bas[i].classList.add(basto);
      let arrLength = bas[i].classList.length;
      console.log(arrLength);
      console.log(bas[i].classList[arrLength - 1]);
      if (
        bas[i].classList[arrLength - 1] == "spade" ||
        bas[i].classList[arrLength - 1] == "heart" ||
        bas[i].classList[arrLength - 1] == "diamond" ||
        bas[i].classList[arrLength - 1] == "club"
      ) {
        bas[i].classList.remove(bas[i].classList[arrLength - 1]);
        bas[i].classList.add(basto);
      } else {
        bas[i].classList.add(basto);
      }
      console.log(bas[i].classList.length, "baasi");
    }
    console.log(bas);
  }
  drawBastos(bas);
};

function number() {
  let numb = randomNum();
  let runmb = document.querySelectorAll(".numb");
  function rewriteNumb(runmb) {
    for (let i = 0; i < runmb.length; i++) {
      runmb[i].innerHTML = numb;
    }
  }

  rewriteNumb(runmb);
}

let bastosSecondCard = () => {
  let basto = "";
  switch (randomSuit()) {
    case 0:
      basto = "spade";
      break;
    case 1:
      basto = "heart";
      break;
    case 2:
      basto = "diamond";
      break;
    case 3:
      basto = "club";
      break;
  }
  let bas = document.querySelectorAll(".bastos2");
  function drawBastos(bas) {
    for (let i = 0; i < bas.length; i++) {
      //activeDiv.classList.replace('active', 'warning');Usar para emezar desde 0.
      bas[i].classList.add(basto);
    }
  }
  drawBastos(bas);
  //return console.log(basto);
};

function numberSecondCard() {
  let numb = randomNum();
  let runmb = document.querySelectorAll(".numb2");
  function rewriteNumb(runmb) {
    for (let i = 0; i < runmb.length; i++) {
      runmb[i].innerHTML = numb;
    }
  }
  rewriteNumb(runmb);
}
