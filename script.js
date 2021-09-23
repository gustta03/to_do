const start = document.querySelector(".content-start");
const timer = document.querySelector(".timer");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const ps = document.querySelector(".content-pause");
const card = document.querySelector(".toast--content img");
const toast = document.querySelector(".toast");
let audio = new Audio("./audio/end.mp3");
let setTime;
let setPause;
let minutesObj = {
  min: 24,
  secs: 59,
  minP: 4,
  secsP: 59,
  resetMin: 0,
  resetSec: 0,
};

start.onclick = function timers() {
  timer.innerHTML = `${minutesObj.min}:${minutesObj.secs}`;
  minutesObj.secs--;
  if (minutesObj.secs <= 59) {
    timer.innerHTML = `${minutesObj.min}:${minutesObj.secs}`;
  }
  if (minutesObj.secs === 0) {
    minutesObj.secs = 59;
    minutesObj.min--;
    timer.innerHTML = `${minutesObj.min}:${minutesObj.secs}`;
  }
  if (minutesObj.secs <= 9) {
    timer.innerHTML = `${minutesObj.min}:0${minutesObj.secs}`;
  }
  if (minutesObj.min <= 0) {
    audio.play();
    minutesObj.min = 24;
    minutesObj.secs = 59;
    timer.innerHTML = `${minutesObj.min}:${minutesObj.secs}`;
    return;
  }
  setTime = setTimeout(timers, 1000);
  setTimeout(setTime);
  clearInterval(setPause);
};

ps.onclick = function pause() {
  timer.innerHTML = `${minutesObj.minP}:${minutesObj.secsP}`;
  minutesObj.secsP--;
  if (minutesObj.secsP <= 59) {
    timer.innerHTML = `${minutesObj.minP}:${minutesObj.secsP}`;
  }
  if (minutesObj.secsP <= 0) {
    minutesObj.secsP = 59;
    minutesObj.minP--;
  }
  timer.innerHTML = `${minutesObj.minP}:${minutesObj.secsP}`;
  if (minutesObj.minP <= 0) {
    minutesObj.secsP = 59;
    minutesObj.minP = 5;
    timer.innerHTML = `${minutesObj.minP}:${minutesObj.secsP}`;
    audio.play();
    return;
  }
  setPause = setTimeout(pause, 1000);
  setTimeout(setPause);
  clearInterval(setTime);
};

let popup = document.querySelector(".card");
card.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

let closePop = document.querySelector(".close");

closePop.addEventListener("click", () => {
  popup.classList.add("hidden");
});

let resetButton = document.querySelector(".circle-reset");

resetButton.addEventListener("click", () => {
  timer.innerHTML = `0${minutesObj.resetMin}:0${minutesObj.resetSec}`;
  clearInterval(setTime);
  clearInterval(setPause);
  console.log(minutesObj)
});

const adicionarIimer = () => {
  timer.innerHTML = `${minutesObj.min += 5}:${minutesObj.secs}`;
  clearInterval(setTime);
  clearInterval(setPause);
}

// document.querySelector('.sub').addEventListener('click', subtrairTimer)
document.querySelector('.add').addEventListener('click', adicionarIimer)