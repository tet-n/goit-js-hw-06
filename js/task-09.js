function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.body,
  spanColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};

const onChangeColor = function (e) {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.spanColor.textContent = randomColor;
};

refs.btnChangeColor.addEventListener('click', onChangeColor);

