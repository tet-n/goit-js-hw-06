const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.addEventListener('input', function (e) {
  e.preventDefault();
  refs.span.style.fontSize = e.currentTarget.value + 'px';
});
