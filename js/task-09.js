function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  spanColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};

const onChangeColor = function (e) {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = getRandomHexColor();
};

refs.btnChangeColor.addEventListener('click', onChangeColor);

