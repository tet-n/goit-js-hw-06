function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy'),
  boxes: document.querySelector('#boxes'),
};

const createBoxes = function (amount) {
  //Вихідні дані
  amount = refs.input.value;

  let startAmount = refs.boxes.children.length;
  let div = '';
  const width = 30;
  const height = 30;

  const repeatElements = function () {
    for (let i = startAmount; i < amount; i += 1) {
      div += `<div id="box" style="width:${width + i * 10}px;height:${
        height + i * 10
      }px;background-color:${getRandomHexColor()}"></div>`;
    }
    return div;
  };

  // Cтворюємо елементи
  if (refs.boxes.innerHTML === '') {
    repeatElements();
    refs.boxes.insertAdjacentHTML('afterbegin', div);
    refs.input.value = '';

    // Якщо вже були створені елементи та треба додати ще
  } else {
    amount = startAmount + Number(amount);
    repeatElements();
    refs.boxes.insertAdjacentHTML('beforeend', div);
    refs.input.value = '';
  }
};

const destroyBoxes = function () {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
};

// Event handlers
refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

