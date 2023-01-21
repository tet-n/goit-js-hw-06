const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.getElementById('value');

spanRef.textContent = 0;

const onDecrementBtnClick = function () {
  spanRef.textContent -= 1;
};

const onIncrementBtnClick = function () {
  spanRef.textContent = Number(spanRef.textContent) + 1;
};

btnDecrementRef.addEventListener('click', onDecrementBtnClick);
btnIncrementRef.addEventListener('click', onIncrementBtnClick);
