const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    bodyEl: document.querySelector('body'),
}
let intervalId = null;
let disabled = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    if (disabled) {
        return;
    }

    intervalId = setInterval(() => {
        refs.bodyEl.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);

    disabled = true;
    refs.startBtn.setAttribute("disabled", "disabled");
}

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
    clearInterval(intervalId);
    disabled = false;
    refs.startBtn.removeAttribute("disabled");
}


