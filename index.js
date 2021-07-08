const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]')
const CHANGE_DELAY = 1000;


startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

function changeColor(event){
  if(event.target){
      timerId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)] ;
      }, CHANGE_DELAY);
      startBtn.disabled = true;
  };
}


function stopChangeColor(event){
    if(event.target){
      document.body.style.backgroundColor = '';
      clearInterval(timerId);
      startBtn.disabled = false;
    }
}


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


