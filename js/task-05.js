const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const onInputChange = function (e) {
  spanRef.textContent = e.currentTarget.value;
  if (e.currentTarget.value === '') {
    spanRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', onInputChange);
