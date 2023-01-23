const formRef = document.querySelector('.login-form');
const input = document.querySelectorAll('input');

const onFormSubmit = function (e) {
  e.preventDefault();

  if ([...input].some((el) => el.value === '')) {
    alert('Заповніть пусті поля');
  } else {
    //Вивести у консоль об'єкт з даними. Метод з elements
    const elements = e.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(formData);

    //Вивести у консоль об'єкт з даними. Метод з FormData.
    // const formData = new FormData(e.currentTarget);
    // const data = {};
    // formData.forEach((value, name) => {
    //   data[name] = value;
    // });
    // console.log(data);}
  }
};

formRef.addEventListener('submit', onFormSubmit);

