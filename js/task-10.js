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
  let startAmount = 0;
  let endAmount = 0;
  let div = '';
  const width = 30;
  const height = 30;

  // Якщо ще не були створені елементи
  if (refs.boxes.innerHTML === '') {
    for (let i = 0; i < amount; i += 1) {
      div += `<div id="box" style="width:${width + i * 10}px;height:${
        height + i * 10
      }px;background-color:${getRandomHexColor()}"></div>`;
    }
    refs.boxes.insertAdjacentHTML('afterbegin', div);
    refs.input.value = '';

    // Якщо вже були створені та треба додати ще
  } else {
    startAmount = refs.boxes.children.length;
    endAmount = startAmount + Number(amount);

    for (let i = startAmount; i < endAmount; i += 1) {
      div += `<div id="box" style="width:${width + i * 10}px;height:${
        height + i * 10
      }px;background-color:${getRandomHexColor()}"></div>`;
    }
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

