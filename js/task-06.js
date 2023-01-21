const inputRef = document.querySelector('#validation-input');
const symbolLength = inputRef.getAttribute('data-length');

const onInputBlur = function (e) {
  e.preventDefault();
  if (e.currentTarget.value.length !== Number(symbolLength)) {
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
};

inputRef.addEventListener('blur', onInputBlur);
